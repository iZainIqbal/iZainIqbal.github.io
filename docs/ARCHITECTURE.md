# Portfolio v2: Information Architecture

## The one problem this site solves

A visitor must understand **what Zain personally built** without searching.
v1 described the *apps* ("image-based product search"); v2 describes *Zain's
work* ("I built the Flutter checkout and Stripe integration; the team built the
image-search backend").

## Two audiences, split clearly

| Audience | Entry | Wants | Gets |
|---|---|---|---|
| Employer / recruiter / tech lead | `/` | Can he do the job? What did he own? | Hero, selected work, case studies, CV |
| Freelance client | `/hire` | Can he build my app? What will it cost me in effort? | Outcomes, services, process, contact |

The home page speaks only to employers. Clients reach `/hire` through a
labelled header link. Neither audience reads copy written for the other.

## Reading layers (the core UX rule)

| Time | Question | Answered by |
|---|---|---|
| 10 s | Who is he, is he worth my time? | Hero: one-line identity, short lede, 2 CTAs |
| 1 min | What did he personally build? | Standard project cards (role, what I built, team built) |
| 5 min | Can he handle hard problems? | 2-3 case studies: problem → decision → my scope → team scope → result |

## Site map

```
/                 employer home: hero · selected work · timeline strip · contact
/work/            all projects, filterable by layer (Flutter, API, Web, Payments, AI, Data)
/work/[slug]/     case study (flagships) or detail page
/about/           timeline Nov 2023 → now, education, skills-with-evidence
/hire/            client page: outcomes, services, process, contact
/cv/              HTML CV generated from the same data + PDF download
/404
```

## Single source of truth

All facts live in `src/content/` (typed Astro content collections).
Pages, the CV page, and later the GitHub README all read from it: so a date
or number can only be wrong in one place. This removes the root cause of v1's
contradictions (Sep vs Aug 2025, QR 2023 vs 2024, Chrono Chase 2023 vs 2025).

## Standard project card (every project, same order)

```
Title · Role · Period · Team context
I built      3 verb-first bullets: only Zain's work
Team built   1 line: what others owned (honesty = credibility)
Result       number or before/after, or omitted (never invented)
Layers       matrix chips · Stack · Evidence links (live / case study / code)
```

## Content rules

1. No claim without evidence or explicit owner confirmation (`verified` flag).
2. No marketing superlatives about client products ("Switzerland's first …").
3. Numbers are real or absent: no `[X]` placeholders, no estimates.
4. Dates come only from `src/content/`.
5. Contact: email + LinkedIn + GitHub. No phone number on the public site.
