# Design system

Goal: a reviewer understands Zain's contribution at a glance. The design stays
quiet so the content: "what I built": is the loudest thing on every page.

## Principles
1. **Answer first.** Every project page opens with "What I built" before any story.
2. **Same shape everywhere.** Every card has the same fields in the same order, so after the first card readers scan instead of read.
3. **Honesty is a visual element.** "Team built" appears in muted text next to "What I built".
4. **One accent colour.** Blue marks what's his (bullets, primary buttons). Nothing else competes.
5. **Mobile is not a shrunken desktop.** Screenshots scroll sideways with snap points.

## Tokens (src/styles/global.css)
| Token | Light | Dark | Use |
|---|---|---|---|
| bg | #f7f6f2 | #0f1115 | page (warm paper, not pure white) |
| surface | #ffffff | #161920 | cards |
| ink / ink-2 / muted | #15171c / #3d434f / #5f6674 | #eef0f4 / #c6cad3 / #9aa1ae | text hierarchy |
| line | #e2dfd7 | #2a2f3a | borders |
| accent | #1d4ed8 | #8aa8ff | "mine", links, primary CTA |
| team | #d9d6ce | #3a404c | "not mine" dots |

Dark mode follows the OS; the header toggle overrides it (saved per browser).

## Type
Inter Variable for text, JetBrains Mono for eyebrows and labels. Body 17px / 1.65.
Line length is capped at about 60-68 characters. Headings are balanced and tightly tracked.

## Components
- **Hero**: eyebrow → one-sentence H1 → lede → 2 CTAs, portrait on desktop.
- **ProjectCard**: cover (a landscape image, or a strip of 3 phone screenshots) → meta → title → summary → My role → What I built (3 items) → Team built → layer chips → link.
- **Timeline**: vertical rule with the current role highlighted in accent.
- **Case study**: "What I built" box → narrative → screenshot rail; sticky facts sidebar on desktop.

## Accessibility
Skip link, visible focus ring, `aria-current` in nav, reduced-motion respected,
filter buttons use `aria-pressed` plus a polite live region, all images sized.
