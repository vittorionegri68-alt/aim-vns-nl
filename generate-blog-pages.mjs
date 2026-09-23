// ─────────────────────────────────────────────────────────────────────────────
// generate-blog-pages.mjs
//
// Genera una pagina HTML statica per ciascun articolo attivo del blog (letti da
// src/posts.jsx) e la salva in public/post/{slug}.html. Ogni pagina è un URL
// individuale, condivisibile e citabile, con link alla home, link interni verso
// altri articoli (quando presenti nel contenuto) e un CTA verso il profilo
// Instagram @aimbyvns.
//
// Perché esiste: il blog è renderizzato solo lato client (React, stato
// "aperto" in App.jsx), quindi oggi nessun articolo ha un indirizzo proprio.
// generate-blog-noscript.mjs risolve la leggibilità del testo per i crawler
// senza JS sull'unico URL della home, ma non risolve condivisibilità né link
// interni tra articoli: per questo serve un URL dedicato per articolo.
//
// Si esegue automaticamente ad ogni build (vedi package.json: "build"), quindi
// resta sempre sincronizzato con posts.jsx, sia per gli articoli esistenti che
// per ogni nuovo articolo pubblicato in futuro. Non richiede alcun passo
// manuale aggiuntivo.
//
// Nota sullo slug: l'id di un articolo in posts.jsx è pensato come chiave
// interna per React (stato "aperto"), non come URL pubblico. Per questo lo
// slug del file viene derivato con normalizzazione (minuscolo, spazi/accenti
// rimossi), invece di usare l'id grezzo: un id non conforme come
// "Aprile in Romagna" produrrebbe altrimenti un URL non valido
// (/post/Aprile in Romagna.html). Il campo id originale non viene toccato.
//
// Link interni tra articoli: dentro il campo "testo" di un blocco paragrafo
// in posts.jsx, la sintassi [[etichetta visibile|id-articolo-target]] genera
// un link <a> verso la pagina statica dell'articolo target, sempre con
// target="_blank" (si apre in una nuova scheda). L'id è quello grezzo del
// post (lo stesso usato come chiave "id" in posts.jsx), non lo slug: se
// l'id punta a un articolo inesistente o non attivo, la build fallisce con
// un errore esplicito invece di generare un link rotto in silenzio. La stessa
// sintassi è interpretata anche dal rendering React live (src/App.jsx,
// funzione renderTestoConLink), così i link interni compaiono in modo
// identico sia sulle pagine statiche /post/ sia nel blog dal vivo. Il
// noscript per crawler (generate-blog-noscript.mjs) non la interpreta
// ancora: mostrerebbe il markup grezzo se qualcuno lo aprisse a mano, ma non
// è un problema per i motori di ricerca, che leggono solo il testo.
//
// Sezione "Leggi anche": il link generico verso #blog che posts.jsx mette
// dopo il paragrafo "Leggi anche" viene sostituito con un link per ciascun
// articolo che il post cita come link interno nel proprio testo (fino a 3),
// etichettato con il titolo reale dell'articolo target. Se il post non cita
// nessun altro articolo, resta il bottone generico verso #blog. Vedi
// estraiIdCorrelati() e buildContenuto().
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, copyFileSync, unlinkSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const POSTS_PATH = join(ROOT, "src", "data", "posts.jsx");
const OUT_DIR = join(ROOT, "public", "post");

const SITE_URL = "https://nl.aim-vns.com";
const CALENDLY_URL = "https://calendly.com/aim-vns-info/30min";

function isSocialBlock(b) {
  if (b.tipo === "titoletto" && b.testo.trim().toLowerCase() === "seguici sui social") return true;
  if (b.tipo === "link" && (b.testo.includes("instagram.com") || b.testo.includes("facebook.com"))) return true;
  return false;
}

function isBlogHomeLink(b) {
  return b.tipo === "link" && b.testo.includes("/#blog");
}

// I link "Leggi anche" (1-2 per articolo, verso articoli realmente correlati,
// con etichetta breve sull'argomento trattato) sono ora scritti a mano
// direttamente in posts.jsx, subito dopo il paragrafo "Leggi anche". Questo
// script non li genera più automaticamente: li lascia passare così come sono,
// identici sia qui che nel rendering React live, perché vivono nel contenuto
// condiviso invece che in una trasformazione separata per ciascuna superficie.
//
// L'unico intervento di questa funzione è una rete di sicurezza: se un
// articolo (oggi o in futuro) non ha nessun link dopo "Leggi anche" - perché
// non esiste ancora una correlazione sensata da scrivere a mano - viene
// inserito un singolo bottone "Tutti gli articoli" verso #blog, con la stessa
// etichetta del bottone "← Tutti gli articoli" già usato nel blog live quando
// si chiude un articolo aperto. Meglio un rimando alla lista completa che
// nessun rimando. Qualunque link verso #blog scritto per errore altrove nel
// contenuto viene comunque rimosso, per evitare doppioni con questo fallback.
const FALLBACK_TUTTI_GLI_ARTICOLI = { tipo: "link", testo: `${SITE_URL}/#blog`, etichetta: "Tutti gli articoli" };

function buildContenuto(post) {
  return post.contenuto.filter((b) => !isSocialBlock(b) && !isBlogHomeLink(b));
}

function renderLeggiAnche(post, idToPost) {
  const altri = [...idToPost.values()]
    .filter((p) => p.id !== post.id)
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, 2);
  if (altri.length === 0) return "";
  const items = altri
    .map((p) => `<a class="la-item" href="/post/${slugify(p.id)}.html">${escapeHtml(p.titolo)}</a>`)
    .join("\n        ");
  return `
      <section class="leggi-anche">
        <h2>Lees ook</h2>
        ${items}
      </section>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str);
}

// Sintassi per i link interni tra articoli, usata dentro il campo "testo" dei
// blocchi paragrafo in posts.jsx: [[etichetta visibile|id-articolo-target]].
// L'id è quello grezzo del post in posts.jsx (non lo slug), così il riferimento
// resta leggibile e stabile anche se lo slug cambia forma in futuro. idToSlug
// viene costruito in main() dopo l'assegnazione degli slug a tutti gli articoli
// attivi, e passato a valle fino a questa funzione.
const INTERNAL_LINK_RE = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

function renderParagraphWithLinks(testo, idToSlug) {
  let result = "";
  let lastIndex = 0;
  let match;
  INTERNAL_LINK_RE.lastIndex = 0;
  while ((match = INTERNAL_LINK_RE.exec(testo)) !== null) {
    const [full, label, targetId] = match;
    result += escapeHtml(testo.slice(lastIndex, match.index));
    const slug = idToSlug.get(targetId);
    if (!slug) {
      throw new Error(
        `generate-blog-pages: link interno verso id "${targetId}" non trovato tra gli articoli attivi (etichetta: "${label}"). Correggere l'id in posts.jsx.`
      );
    }
    const href = `${SITE_URL}/post/${slug}.html`;
    result += `<a class="inline-link" href="${escapeAttr(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
    lastIndex = INTERNAL_LINK_RE.lastIndex;
  }
  result += escapeHtml(testo.slice(lastIndex));
  return result;
}

function slugify(id) {
  return String(id)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // rimuove accenti
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return iso;
  }
}

async function loadPosts() {
  // posts.jsx non contiene sintassi JSX (solo oggetti JS), quindi può essere
  // importato come modulo ES puro: basta una copia temporanea con estensione .mjs.
  // Stesso approccio di generate-blog-noscript.mjs, per coerenza.
  const tmpPath = join(ROOT, "src", `_posts-tmp-pages-${Date.now()}.mjs`);
  copyFileSync(POSTS_PATH, tmpPath);
  try {
    const mod = await import(pathToFileURL(tmpPath).href);
    return mod.posts;
  } finally {
    unlinkSync(tmpPath);
  }
}

function renderContentBlock(b, idToSlug) {
  if (b.tipo === "paragrafo") {
    return `      <p>${renderParagraphWithLinks(b.testo, idToSlug)}</p>`;
  }
  if (b.tipo === "titoletto") {
    return `      <h2>${escapeHtml(b.testo)}</h2>`;
  }
  if (b.tipo === "link") {
    const isInstagram = b.testo.includes("instagram");
    const isFacebook = b.testo.includes("facebook");
    const label = b.etichetta ? b.etichetta : isInstagram ? "Instagram" : isFacebook ? "Facebook" : b.testo;
    return `      <p><a class="btn-link" href="${escapeAttr(b.testo)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a></p>`;
  }
  if (b.tipo === "download") {
    const parts = [];
    if (b.src1) parts.push(`<a class="btn-link" href="${escapeAttr(b.src1)}" download>↓ ${escapeHtml(b.label1 || "Scarica")}</a>`);
    if (b.src2) parts.push(`<a class="btn-link" href="${escapeAttr(b.src2)}" download>↓ ${escapeHtml(b.label2 || "Scarica")}</a>`);
    return `      <p>${parts.join(" ")}</p>`;
  }
  return null;
}

function renderPage(post, idToSlug, idToPost) {
  const slug = post.slug;
  const url = `${SITE_URL}/post/${slug}.html`;
  const title = `${post.titolo} | AI'm by VNS`;
  const description = post.sommario;
  const dateIso = new Date(post.data).toISOString();

  const bodyBlocks = buildContenuto(post, idToSlug, idToPost)
    .map((b) => renderContentBlock(b, idToSlug))
    .filter(Boolean)
    .join("\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.titolo,
    "description": post.sommario,
    "datePublished": post.data,
    "dateModified": post.data,
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "author": { "@type": "Organization", "name": "AI'm by VNS" },
    "publisher": {
      "@type": "Organization",
      "name": "AI'm by VNS",
      "url": SITE_URL,
    },
  };

  return `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <link rel="canonical" href="${escapeAttr(url)}" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeAttr(post.titolo)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:url" content="${escapeAttr(url)}" />
    <meta property="og:site_name" content="AI'm by VNS" />
    <meta property="article:published_time" content="${dateIso}" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeAttr(post.titolo)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />

    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
      :root { --gold:#a0782a; --text:#ffffff; --textMid:#aaaaaa; --textSoft:#777777; --bg:#080808; --border:#1a1a1a; }
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      body{background:var(--bg);color:var(--textMid);font-family:'Inter',Arial,sans-serif;line-height:1.8;-webkit-font-smoothing:antialiased;}
      .wrap{max-width:760px;margin:0 auto;padding:3rem 1.5rem 5rem;}
      .top-nav{font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:2.5rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;}
      .top-nav a{color:var(--gold);text-decoration:none;font-weight:700;}
      .share-btn{background:none;border:1px solid var(--border);color:var(--textMid);font-family:'Inter',sans-serif;font-size:0.7rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:0.5rem 1rem;cursor:pointer;transition:all 0.2s;}
      .share-btn:hover{border-color:var(--gold);color:var(--gold);}
      .cat{display:inline-block;font-family:'Inter',sans-serif;font-size:0.62rem;font-weight:700;letter-spacing:0.18em;color:var(--gold);text-transform:uppercase;border:1px solid var(--border);padding:0.25rem 0.6rem;margin-right:0.75rem;}
      time{font-size:0.72rem;color:var(--textSoft);letter-spacing:0.05em;}
      h1{font-family:'Oswald',sans-serif;font-weight:700;font-size:clamp(1.8rem,4vw,2.8rem);line-height:1.1;letter-spacing:0.01em;text-transform:uppercase;color:var(--text);margin:1.25rem 0;}
      .sommario{color:var(--gold);font-size:1.1rem;line-height:1.6;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid var(--border);}
      h2,h3{font-family:'Oswald',sans-serif;font-weight:700;font-size:clamp(1.15rem,2vw,1.5rem);text-transform:uppercase;letter-spacing:0.02em;color:var(--text);margin:2.5rem 0 0.8rem;}
      p{color:var(--textMid);font-size:1rem;line-height:1.8;margin-bottom:1.3rem;}
      .btn-link{display:inline-block;color:var(--gold);border:1px solid var(--gold);padding:0.6rem 1.4rem;font-family:'Inter',sans-serif;font-size:0.72rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;margin:0.25rem 0.5rem 0.25rem 0;transition:all 0.2s;}
      .btn-link:hover{background:var(--gold);color:#000;}
      .inline-link{color:var(--gold);text-decoration:underline;text-decoration-color:rgba(160,120,42,0.4);text-underline-offset:2px;}
      .inline-link:hover{text-decoration-color:var(--gold);}
      .ig-cta{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);text-align:center;}
      .ig-cta p{color:var(--textMid);font-size:0.95rem;margin-bottom:1.2rem;}
      footer{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border);text-align:center;}
      footer a{color:var(--gold);text-decoration:none;font-size:0.72rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;}
      .leggi-anche{margin-top:3rem;padding-top:1.5rem;border-top:1px solid var(--border);}
      .leggi-anche h2{font-family:'Inter',sans-serif;font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--textMid);margin:0 0 1rem;font-weight:700;}
      .la-item{display:block;font-family:'Oswald',sans-serif;font-weight:700;font-size:clamp(1rem,1.6vw,1.25rem);text-transform:uppercase;letter-spacing:0.02em;padding:0.85rem 0;border-bottom:1px solid var(--border);color:var(--text);text-decoration:none;transition:color 0.2s;}
      .la-item:hover{color:var(--gold);}
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="top-nav">
        <a href="${SITE_URL}/#blog">← Terug naar de site</a>
        <button type="button" class="share-btn" id="share-btn">Condividi ↗</button>
      </div>
      <span class="cat">${escapeHtml(post.categoria)}</span>
      <time datetime="${escapeAttr(post.data)}">${escapeHtml(formatDate(post.data))}</time>
      <h1>${escapeHtml(post.titolo)}</h1>
      <p class="sommario">${escapeHtml(post.sommario)}</p>
${bodyBlocks}
      ${renderLeggiAnche(post, idToPost)}
      <div class="ig-cta">
        <p>Wil je weten hoe AI-assistenten je vinden? De eerste analyse is gratis.</p>
        <a class="btn-link" href="${CALENDLY_URL}" target="_blank" rel="noopener noreferrer">Gratis analyse</a>
      </div>
      <footer><a href="${SITE_URL}/">AI'm by VNS - Terug naar home</a></footer>
    </div>
    <script>
      (function () {
        var btn = document.getElementById("share-btn");
        if (!btn) return;
        var url = ${JSON.stringify(url)};
        var title = ${JSON.stringify(post.titolo)};
        var text = ${JSON.stringify(post.sommario)};
        var defaultLabel = btn.textContent;
        btn.addEventListener("click", async function () {
          // url incluso anche in "text": alcuni client (es. app email) leggono
          // solo il campo text e ignorano url, altrimenti il link non
          // arriverebbe nel corpo del messaggio.
          var shareData = { title: title, text: text + "\\n\\n" + url };
          if (navigator.share) {
            try { await navigator.share(shareData); } catch (e) {}
            return;
          }
          try {
            await navigator.clipboard.writeText(url);
            btn.textContent = "Link copiato ✓";
            setTimeout(function () { btn.textContent = defaultLabel; }, 2000);
          } catch (e) {
            window.prompt("Copia il link dell'articolo:", url);
          }
        });
      })();
    </script>
  </body>
</html>
`;
}

async function main() {
  const posts = await loadPosts();

  const visibili = posts.filter((p) => p.attivo);

  if (visibili.length === 0) {
    console.warn("generate-blog-pages: nessun articolo attivo trovato, nessuna pagina generata.");
    return;
  }

  // Deriva lo slug per ciascun post e verifica che non ci siano collisioni
  // (id diversi che normalizzano allo stesso slug).
  const seen = new Map();
  for (const p of visibili) {
    const slug = slugify(p.id);
    if (!slug) {
      throw new Error(`generate-blog-pages: id "${p.id}" produce uno slug vuoto, correggere l'id in posts.jsx.`);
    }
    if (seen.has(slug)) {
      throw new Error(`generate-blog-pages: collisione di slug "${slug}" tra id "${seen.get(slug)}" e "${p.id}". Correggere uno dei due id in posts.jsx.`);
    }
    seen.set(slug, p.id);
    p.slug = slug;
  }

  // Mappa id (chiave grezza in posts.jsx) -> slug (nome file pubblico), usata
  // per risolvere i link interni [[etichetta|id]] dentro i paragrafi. Include
  // solo gli articoli attivi: un link verso un articolo disattivato deve
  // fallire la build, non produrre un link rotto silenzioso.
  const idToSlug = new Map(visibili.map((p) => [p.id, p.slug]));
  const idToPost = new Map(visibili.map((p) => [p.id, p]));

  mkdirSync(OUT_DIR, { recursive: true });

  // Rimuove pagine orfane (articoli disattivati o rinominati) prima di rigenerare,
  // così public/post/ resta sempre uno specchio esatto degli articoli attivi.
  const attesi = new Set(visibili.map((p) => `${p.slug}.html`));
  for (const f of readdirSync(OUT_DIR)) {
    if (f.endsWith(".html") && !attesi.has(f)) {
      unlinkSync(join(OUT_DIR, f));
    }
  }

  for (const post of visibili) {
    const html = renderPage(post, idToSlug, idToPost);
    writeFileSync(join(OUT_DIR, `${post.slug}.html`), html, "utf8");
  }

  console.log(`generate-blog-pages: generate ${visibili.length} pagine in public/post/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
