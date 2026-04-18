# jamesnguyen.netlify.app

Personal site of James Nguyen — accountant/data scientist, learning full-stack development. Built with [Astro](https://astro.build).

Live: https://jamesnguyen.netlify.app

## Stack

- Astro 4 (static SSG)
- `@astrojs/sitemap` for `sitemap-index.xml`
- Deployed on Netlify (config in `netlify.toml`)

## Project structure

```
├── public/            # static assets (favicon, robots.txt)
├── src/
│   ├── components/    # Card, BlogPost, ProjectCard, SocialStats, etc.
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── work.astro
│       ├── projects.astro
│       ├── learning.astro
│       ├── python.astro
│       ├── favorites.astro
│       ├── blog.astro
│       └── blog/      # individual posts
├── scripts/
│   └── generate-docs.js
├── astro.config.mjs
└── netlify.toml
```

Each file under `src/pages/` maps to a route.

## Commands

| Command             | What it does                          |
| :------------------ | :------------------------------------ |
| `npm install`       | Install dependencies                  |
| `npm run dev`       | Dev server at `localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`    |
| `npm run preview`   | Preview the production build locally  |

## Deploy

Pushes to `main` auto-deploy via Netlify. Build settings are pinned in `netlify.toml` (Node 20, `npm run build`, publish `dist`).
