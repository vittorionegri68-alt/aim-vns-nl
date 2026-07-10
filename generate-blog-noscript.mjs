// generate-blog-noscript.mjs — AI'm by VNS
// Genera HTML statico dagli articoli attivi di src/data/posts.jsx e lo inserisce
// nel blocco <noscript> di index.html, tra i marcatori BLOG-STATIC-START/END.
// Idempotente: rieseguirlo non duplica mai il contenuto.
// Agganciato al comando "build" di package.json:
//   "build": "node generate-blog-noscript.mjs && vite build"

import fs from "fs";

// --- CONFIGURAZIONE (questo repo) ---
const POSTS_FILE = "./src/data/posts.jsx";
const INDEX_FILE = "./index.html";
const LOCALE = "nl-NL";
// ------------------------------------

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function loadPosts(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  // Tollera "export const posts = [...]" (senza ;) e "posts = [...];".
  const match = raw.match(/posts\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
  if (!match) {
    throw new Error("Impossibile trovare l'array posts nel file " + filePath);
  }
  return new Function(`return ${match[1]};`)();
}

function renderPost(post, locale) {
  const dateFormatted = new Date(post.data).toLocaleDateString(locale, {
    day: "numeric", month: "long", year: "numeric"
  });

  const body = post.contenuto.map((blocco) => {
    if (blocco.tipo === "paragrafo") return `<p>${escapeHtml(blocco.testo)}</p>`;
    if (blocco.tipo === "titoletto") return `<h3>${escapeHtml(blocco.testo)}</h3>`;
    if (blocco.tipo === "link") {
      const label = blocco.etichetta ? escapeHtml(blocco.etichetta) : escapeHtml(blocco.testo);
      return `<p><a href="${escapeHtml(blocco.testo)}">${label}</a></p>`;
    }
    return "";
  }).join("\n          ");

  return `
        <article>
          <h2>${escapeHtml(post.titolo)}</h2>
          <time datetime="${escapeHtml(post.data)}">${dateFormatted}</time>
          <p>${escapeHtml(post.sommario)}</p>
          ${body}
        </article>`;
}

function main() {
  const posts = loadPosts(POSTS_FILE).filter((p) => p.attivo === true);
  const html = posts.map((p) => renderPost(p, LOCALE)).join("\n");

  const indexHtml = fs.readFileSync(INDEX_FILE, "utf8");
  const startMarker = "<!-- BLOG-STATIC-START -->";
  const endMarker = "<!-- BLOG-STATIC-END -->";

  const startIdx = indexHtml.indexOf(startMarker);
  const endIdx = indexHtml.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `Marcatori ${startMarker} / ${endMarker} non trovati in ${INDEX_FILE}. ` +
      `Vanno aggiunti una volta dentro il blocco <noscript> esistente.`
    );
  }

  const before = indexHtml.slice(0, startIdx + startMarker.length);
  const after = indexHtml.slice(endIdx);
  const updated = `${before}\n${html}\n        ${after}`;

  fs.writeFileSync(INDEX_FILE, updated, "utf8");
  console.log(`OK: ${posts.length} articoli attivi nel noscript di ${INDEX_FILE} (locale ${LOCALE})`);
}

main();
