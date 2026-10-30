# Kenjige Coffee — website source

React + Vite + Tailwind CSS + Framer Motion. The built site lives at the repository root
(`index.html` and `assets/`), which is what gets published.

## Edit and preview

```bash
cd source
npm install
npm run dev
```

Open http://localhost:5173.

## Publish changes

```bash
cd source
npm run build
```

This rewrites `../index.html` and adds new files to `../assets/`. Delete the old `index-*.js` / `index-*.css`
files in `assets/` that `index.html` no longer references, then commit and push.

## Order requests → Google Sheets

See [`google-sheets/README.md`](./google-sheets/README.md). The web app URL goes in `src/config.js`.
