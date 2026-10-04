# jamesnguyen.netlify.app

James Nguyen's portfolio: projects, work history, and short lessons from building finance automation, data pipelines, and AI workflows.

Live: https://jamesnguyen.netlify.app

## Built with

- [Astro 4](https://astro.build) (static site)
- Astro content collections for the lessons
- Deployed on Netlify

## Structure

- `src/pages/` — one `.astro` file per route (home, about, work, projects, blog, now)
- `src/content/lessons/` — Markdown lessons rendered on the Writing page
- `src/components/` — shared UI pieces (cards, logo, social icons)
- `src/layouts/` — the site shell: nav, footer, meta tags, global styles

## Run locally

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in ./dist
```

## Adding a lesson

Drop a `.md` file in `src/content/lessons/`. The frontmatter fields are validated by `src/content/config.ts`:

```md
---
title: "Fail closed before the import"
date: 2026-06-01
when: "Apr – Aug 2026"
area: work
project: "Import automation"
summary: "One sentence on what happened and what it taught me."
rule: "The one-line rule I took away."
---
```

`area` is `work` or `personal`. The body below the frontmatter is the lesson itself.

## License and contact

Site content and code © James Nguyen. Questions: jamesmnguyen704@outlook.com
