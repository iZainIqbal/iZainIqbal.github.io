# izainiqbal.github.io: portfolio v2

Static portfolio built with Astro and Tailwind CSS. Every fact on the site comes
from typed content files, so a date or claim can only be wrong in one place.

## Run it

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # static site in dist/
npm run preview      # serve dist/
npm run check        # type-check .astro and .ts files
npm run claims       # list claims still waiting for owner sign-off
node scripts/shots.mjs   # desktop + mobile, light + dark screenshots into shots/
```

## Where things live

| What | Where |
|---|---|
| Projects (one Markdown file each) | `src/content/projects/*.md` |
| Roles / timeline | `src/content/experience.json` |
| Skills, each linked to a project that proves it | `src/content/skills.json` |
| Identity, education, certifications | `src/data/profile.ts` |
| Page copy (framing only, no new facts) | `src/data/copy.ts` |
| Schema for all of the above | `src/content.config.ts` |
| Design tokens | `src/styles/global.css` |

## Adding a project

Create `src/content/projects/<slug>.md` with the frontmatter from
`src/content.config.ts`. Keep `verified: false` until the claims are backed by
code or a client-confirmed source. Unverified cards show a yellow warning in
`npm run dev` only.

## Docs

- `docs/ARCHITECTURE.md`: audiences, reading layers, site map, content rules
- `docs/DESIGN.md`: tokens, type, components, accessibility
- `docs/LAUNCH.md`: steps to make the site public and switch links
- Evidence notes and open questions are kept **outside this repo** (they name
  clients and private repos): `~/ana/portfolio-notes/`
