## Cursor Cloud specific instructions

This is a **static website** (HTML/CSS/vanilla JS) with zero build dependencies, no package manager, and no backend. There is no `package.json`, no bundler, and no transpiler.

### Running the dev server

Serve the site locally with Python's built-in HTTP server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080` in Chrome. The page loader animates briefly, then the full site is visible.

### Key interactive feature

The **Website Simulator** (`js/simulator.js`) generates a simple preview card when a business name is entered and "Generate Preview" is clicked. This is the primary testable user interaction.

### Notes

- No lint, test, or build commands exist — the codebase has no tooling beyond a browser.
- Google Fonts (`Inter`) is loaded from CDN; without internet the page falls back to system sans-serif but remains functional.
- The site is deployed via GitHub Pages (see `CNAME` → `zypherolab.com`).
