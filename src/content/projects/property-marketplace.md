---
title: Property marketplace
summary: Tanzanian marketplace for renting and buying homes, with tools for agents and an AI assistant.
kind: client
org: Metaviz AI
role: Frontend engineer (React, SEO, performance)
start: "2026-09"
end: present
layers: [web]
myWork:
  - Made the first page load 24% lighter (727 KB → 553 KB of compressed JavaScript) by loading two heavy libraries only when needed.
  - 'Cleaned up the pages Google crawls: 36,675 → 27,924 URLs, removing 6,162 old-format listing links and 260 thin or blocked pages, so only real listings are left.'
  - Fixed 7 legal and directory pages that told Google not to index them, and blocked the internal admin site from search results.
  - Removed conflicting language tags from all 35,304 listing pages.
  - Built the remove-listing page, where people can ask to take down a listing that shows their property or phone number without consent.
teamWork: Other engineers built most of the platform, the backend services, the AI assistant and the Flutter mobile app.
results:
  - Measured on the live site before and after release, 15–28 Sep 2026.
links:
  - { label: "Live site", url: "https://wanyumba.com", kind: live }
  - { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mymarketsholdings.wanyumba", kind: store }
  - { label: "App Store", url: "https://apps.apple.com/tz/app/wanyumba/id6785371058", kind: store }
stack: [React, TypeScript, Vite, Node.js, nginx]
cover: ../../assets/platform/property-home.jpg
order: 7
verified: false
---

## Page I built

**Remove-listing page.** Owners can ask for a listing to be taken down. I built it and made sure search engines can find it.

![Form to ask for a listing to be removed](../../assets/platform/property-remove-listing.jpg)
