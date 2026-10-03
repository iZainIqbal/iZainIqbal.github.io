# Launch checklist (owner does this: it makes the site public)

The repo is **private** while it's being built. GitHub Free only serves Pages
from public repos, so launching means making it public.

## Before launch
- [ ] Answer `~/ana/portfolio-notes/OPEN-QUESTIONS.md` (local only); `npm run claims` prints "All projects verified."
- [ ] Export the CV: `npm run build && npm run preview`, then `node scripts/cv-pdf.mjs`
      (writes `public/Zain_Iqbal_CV.pdf`); rebuild afterwards
- [ ] `npm run check` and `npm run build` pass

## Go live
1. Repo → Settings → General → Change visibility → Public.
2. Settings → Pages → Source: GitHub Actions (workflow at `.github/workflows/deploy.yml`).
3. Push to `main`; wait for the deploy; open https://izainiqbal.github.io/.

## Switch every link to https://izainiqbal.github.io/
- GitHub profile README (`iZainIqbal/iZainIqbal/README.md`) and the profile "Website" field
- `RESUME.md` in the profile repo, and any CV PDFs you send
- LinkedIn: Contact info → Website, and the Featured section
- Old site `izainiqbal.github.io/iZainIqbal/`: replace it with a redirect page
  (`<meta http-equiv="refresh" content="0; url=https://izainiqbal.github.io/">`)
  so links in old CVs still work
- Archive `my-portfolio`, `Portfolio`, `portfolio-termproject`

## After launch
- Share the home page with 3 people for 10 seconds each, then ask: "What does he do,
  and what did he build himself?" Fix whatever they get wrong.
