# AI'm by VNS — Website NL

Stack: React 18 + Vite + Vercel
Taal: Nederlands (primaire versie)
Stijl: AI Dark Brutalist — Oswald 700 + Inter
Brand Identity: v1.0 (01/05/2026)

## Lokaal uitvoeren

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy op Vercel

1. Push naar GitHub
2. Verbind repo op vercel.com
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

## Checklist na deploy

- [ ] URL's bijwerken in `src/config.js`
- [ ] GA4 ID vervangen in `index.html` (G-TEST123 → echt ID)
- [ ] `og-image.jpg` uploaden naar `public/` (1200x630px)
- [ ] SVG-logobestanden uploaden naar `public/`
- [ ] `sitemap.xml` bijwerken met huidige datum
- [ ] Schema valideren via Rich Results Test
- [ ] N8N blog workflow activeren (time-out handmatig uitschakelen na import)

## BELANGRIJK — vercel.json

Het vercel.json-bestand bevat GEEN redirects-blok voor subdomeinen
(nl.aim-vns.com). Subdomeinen gebruiken alleen het headers-blok.
Redirects alleen voor het hoofddomein (www) — anders ERR_TOO_MANY_REDIRECTS.

## Bestandsstructuur

```
aim-vns-nl/
├── index.html              # Schema.org, GA4, hreflang, noscript in body
├── public/
│   ├── robots.txt          # Met expliciete AI-crawlers
│   ├── sitemap.xml         # Zonder changefreq/priority
│   ├── llms.txt            # AI Permissions
│   ├── ai.txt
│   ├── vercel.json         # Alleen headers, geen redirects
│   └── privacy.html        # AVG-conform, inclusief sessionStorage
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── config.js
    ├── components/
    │   ├── LangBanner.jsx  # Taaldetectie browser + sessionStorage
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── HowItWorks.jsx
    │   ├── Resultaten.jsx
    │   ├── Diensten.jsx
    │   ├── FAQ.jsx
    │   ├── Blog.jsx        # Inline artikel uitklap
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── data/
        ├── posts.jsx       # 3 artikelen GEO/AEO in het Nederlands
        └── qanda.jsx       # 10 gevalideerde GEO-vragen
```
