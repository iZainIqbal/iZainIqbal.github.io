---
title: Lead research pipeline
summary: A well-tested Python tool that collects public business data, cleans it and removes duplicates.
kind: personal
role: Sole developer
start: "2026-07"
end: "2026-08"
layers: [data, api, ai]
myWork:
  - Built a Python tool that collects business data from several sources, keeps the relevant companies, cleans the data and removes duplicates.
  - Built n8n workflows that draft one personalised email per lead with the Claude API. A person reviews every draft, and nothing is sent automatically.
  - Wrote 223 automated tests covering every data source, filter and cleaning step, plus strict code checks.
  - Reads contact details from company websites while respecting each site's crawling rules.
stack: [Python, pandas, parsel, FastAPI, SQLite, pytest, mypy, ruff, n8n, Claude API]
featured: false
order: 5
verified: true
---

## Key details

- Sources: Y Combinator, shipping records, Google Places and Google Maps.
- Keeps the relevant companies, cleans the data, removes duplicates and exports a spreadsheet.
- 223 tests covering every source, filter, cleaning step and full pipeline run.
- n8n and the Claude API draft outreach emails. A person reviews them, and nothing is sent automatically.
