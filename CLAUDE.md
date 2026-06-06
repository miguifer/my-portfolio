# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build locally
npx astro check  # Type-check .astro files
```

No test suite is configured.

## Stack

- **Astro 5** (static site, no SSR) with **TypeScript strict mode**
- **Tailwind CSS v4** via Vite plugin (`@tailwindcss/vite`) — imported as `@import "tailwindcss"` in `global.css`, configured inside CSS using `@theme`
- **`@google/model-viewer`** for the 3D `.glb` character on the Hero section
- Deployed to Vercel with `@vercel/analytics` and `@vercel/speed-insights` integrated in `Layout.astro`
- Site URL: `https://miguifer.com/`

## Architecture

Single-page portfolio (`src/pages/index.astro`) composed of three main sections: `<Hero>`, `<Proyectos>`, `<CV>`.

**Data layer** — all content lives in two TypeScript files:
- `src/data/proyectos.ts` — array of `ProyectoData` (project entries with images, tech stack, links)
- `src/data/experiencias.ts` — array of `Empresa` (work experience with nested `Puesto` positions)

**Types** are defined in `src/types/index.ts` (`ProyectoData`, `Empresa`, `Puesto`, `Tecnologia`).

**Layout** (`src/layouts/Layout.astro`) accepts `title`, `description`, `url`, `image` props and handles all SEO tags (Open Graph, Twitter Card, JSON-LD structured data).

**Theme tokens** are set in `src/styles/global.css`:
- `--font-base: "Rubik"` (variable font loaded from `/public/fonts/`)
- `--color-red: #f93634` (primary accent color)

**Static assets** in `public/`:
- `/tech/*.svg` — technology logos referenced by `Tecnologia.logo`
- `/images/experiencia/` and `/images/proyectos/` — project screenshots
- `/images/portfolio.glb` — 3D model for the Hero character
- `/icons/` — social link icons

To add a new project, add an entry to `src/data/proyectos.ts` following the `ProyectoData` type and place any images under `public/images/proyectos/<project-name>/`. Tech logos go in `public/tech/`.

To add a new work experience, add an entry to `src/data/experiencias.ts` following the `Empresa`/`Puesto` types. Date formatting logic lives in `src/utils/dates.ts`.
