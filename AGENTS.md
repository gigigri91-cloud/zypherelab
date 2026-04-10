## Cursor / AI agent instructions — ZypheroLab

Documentația detaliată (handoff RO + ghid tehnic EN) stă în **`docs/`**:

- `docs/AGENTS.md` — instrucțiuni agenți (engleză)
- `docs/PENTRU-CHATURI-VIITOARE.md` — context complet (română)

**Folderul `docs/` este în `.gitignore`** — nu se comite și nu se publică în repo; păstrează aceste fișiere **doar local** sau copiază-le unde ai nevoie.

### Referință minimă (când `docs/` lipsește)

- Site **static**: HTML, CSS, vanilla JS — fără `package.json` / build / backend.
- Local: `python3 -m http.server 8080` → `/` (RO), `/en/` (EN).
- Scripturi: `js/config.js` (constantă WhatsApp și altele), apoi `js/i18n.js` și `js/simulator.js`. Preview simulator: `#previewBox`, `generateSite()` în `simulator.js`.
- Deploy: GitHub Pages, domeniu în `CNAME` → `zypherolab.com`.
- Nu înlocui `index.html` cu un prototip gol fără i18n, `en/index.html`, meta SEO și căi root-relative (`/css/`, `/js/`).
