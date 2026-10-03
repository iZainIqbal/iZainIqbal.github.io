---
title: Africa Travel Hub
summary: Marketplace where safari lodges, fleets, guides and travel agencies across Africa list and run their business.
kind: client
org: Metaviz AI
role: Full-stack engineer (technical SEO, performance, CI)
start: "2026-09"
end: present
layers: [web, api, infra]
myWork:
  - 'Made the site readable to Google in six languages: the home page and 60 of 60 checked business profiles now declare their language and link every version, where before all of them looked English.'
  - Turned 14 park pages that Google saw as blank into real pages with their own titles, and made missing pages return a proper 404 instead of an empty page.
  - Halved the main JavaScript file (1,074 KB → 540 KB) and cut a park page from 13.1 MB to 1.6 MB, so phones download far less.
  - Launched the pricing and for-agencies pages, which returned 404 before, with structured data and a place in the sitemap.
  - 'Fixed CI test jobs that hung for over two hours: traced it to a database deadlock at startup, and all 13 checks now pass.'
teamWork: Other engineers built the platform, its AI assistant, the mobile app and the nightly journey checks.
results:
  - "Article titles too long for Google: 0 of 401 (was 11 of 20 sampled)."
  - Measured on the live site, 16–28 Sep 2026. Page weight is from a Lighthouse test of the live park page.
links:
  - { label: "Live site", url: "https://africatravelhub.com", kind: live }
stack: [React, Vite, i18next, FastAPI, SQLAlchemy, Alembic, PostgreSQL, nginx, JSON-LD, GitHub Actions]
order: 6
verified: false
---
