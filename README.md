# Personal Website — Anudeep Das

Personal academic website built with [Astro](https://astro.build). Fully static — no server or database needed.

## Prerequisites

- [Node.js](https://nodejs.org) 18.17.1 or newer (20+ recommended). Check with:

  ```sh
  node --version
  ```

## Running locally

```sh
# 1. Get the code onto the machine (copy the folder, or clone if you put it on git)
cd personal-website

# 2. Install dependencies (one time)
npm install

# 3. Start the dev server
npm run dev
```

Open http://localhost:4321. The dev server hot-reloads — edits appear in the browser as you save.

## Editing content

All CV content lives in **`src/data/cv.ts`** — publications, research themes, experience, awards, and teaching are plain data arrays. To add a new paper or award, edit only that file; no HTML required.

- In `publications`, wrap your name in `**…**` to bold it (e.g. `**Das, A.**`), and set `href` to the publisher or arXiv link.
- The About text and hero tagline live in `src/pages/index.astro` and `src/components/Hero.astro`.
- Colors and fonts (light and dark theme) are CSS variables in `src/styles/global.css`.

## Project layout

```
src/
  data/cv.ts          ← all CV content (edit this most often)
  pages/index.astro   ← the page: composes the sections
  layouts/Base.astro  ← HTML shell, theme + scroll-reveal scripts
  components/         ← Nav, Hero, Section, PublicationList, RowList, Footer
  styles/global.css   ← design tokens (light/dark), base styles
public/
  favicon.svg
```

## Building for deployment

```sh
npm run build      # outputs static files to dist/
npm run preview    # serve dist/ locally to sanity-check the build
```

Upload the contents of `dist/` to any static host (GitHub Pages, Netlify, Cloudflare Pages, or UWaterloo web hosting). Before deploying, set your real URL in `astro.config.mjs` (`site: 'https://…'`) so canonical URLs resolve correctly.

## Notes

- `node_modules/` is disposable — never copy it between machines; `npm install` recreates it.
- If moving between computers without git, copy everything **except** `node_modules/` and `dist/`.
