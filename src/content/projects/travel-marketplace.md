---
title: Safari travel marketplace
summary: B2B marketplace where safari lodges, fleets, guides and travel agencies across Africa list and run their business.
kind: client
org: Metaviz AI
role: Frontend engineer (React, SEO, performance)
start: "2026-09"
end: present
layers: [web]
myWork:
  - Halved the main JavaScript file (1,074 KB → 540 KB) and cut a park page from 13.1 MB to 1.6 MB, so phones download far less.
  - 'Made the site readable to Google in six languages: the home page and 60 of 60 checked business profiles now declare their language and link every version, where before all of them looked English.'
  - Turned 14 park pages that Google saw as blank into real pages with their own titles, and made missing pages return a proper 404 instead of an empty page.
  - Launched the pricing and for-agencies pages, which returned 404 before, with structured data and a place in the sitemap.
teamWork: Other engineers built most of the backend, the AI assistant and the mobile app.
results:
  - "Article titles too long for Google: 0 of 401 (was 11 of 20 sampled)."
  - Measured on the live site, 16–28 Sep 2026. Page weight is from a Lighthouse test of the live park page.
links:
  - { label: "Live site", url: "https://africatravelhub.com", kind: live }
stack: [React, Vite, i18next, JSON-LD, nginx]
cover: ../../assets/platform/travel-home.jpg
order: 6
verified: false
---

## Pages I worked on

**Pricing page.** It returned 404 before. I built it with structured data so search engines can read the plans.

![Pricing page with four flat monthly plans](../../assets/platform/travel-pricing.jpg)

**Park page.** One of 14 park pages that Google used to see as blank. I also cut this page from 13.1 MB to 1.6 MB.

![National park page with entry fees and a description](../../assets/platform/travel-park.jpg)
