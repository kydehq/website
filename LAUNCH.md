# Launch checklist

Open items that have to be closed before kyde.com goes live with the new
positioning. Written down so nothing gets carried over by accident.

## Copy on the old positioning — done 2026-08-24

The sentence "KYDE is the behavioral system of record for autonomous work"
is gone from the site. 21 files: the closing paragraph in 17 articles, the
meta descriptions on `/company`, `/labs` and the docs index, and the
fallback title and description in `layouts/Base.astro` that every page
without its own falls back to.

The clause is now "a zero trust layer for AI workers and the AI you
already run", which follows the umbrella decision: Zero Trust is the roof,
Workers and Receipts are the two bets under it. Each article kept its own
second half, since gateway, hash chain and boundary enforcement are all
still accurate. Four appositives had to be rewritten rather than swapped,
because they equated the layer with the record it writes.

"Behavioral Firewall" stays inside the articles, per the earlier decision.
It names the enforcement layer, not the company.

## /platform — deleted 2026-08-24

Deleted rather than rewritten: it argued the old positioning end to end,
and a rewrite would have produced a third story. Its material lives on in
the zero trust sections, so it had a natural heir.

`public/platform/index.html` is a hand-written redirect to `/zero-trust`
(meta refresh plus canonical, since GitHub Pages serves static files).
Written by hand rather than via Astro's `redirects` config, because that
emits a lowercase doctype while every other page on the site emits an
uppercase one, and it was the only html-validate failure. Seven pages that
linked to `/platform` now link straight to `/zero-trust`; the stub is for
inbound links we cannot edit.

## Deploy

- [ ] Three canonical URLs 404 until the new pages are live: `/audit`,
      `/zero-trust`, `/de/wissen/souveraene-ki`. Expected, resolves on
      deploy. Re-run `./scripts/qa.sh` afterwards to confirm.
- [ ] Homepage `<title>` and Organization schema were rewritten on
      2026-08-22. Check the search result snippet after the first crawl.
- [ ] `/receipts` needs real targets for two links. "View on GitHub" points
      at the `kydehq` org for now, not at a receipts repository, because none
      is referenced anywhere in this codebase. There is also no URL for the
      specification, so that CTA is not on the page yet.
- [ ] After deploy, re-check the deleted URLs above in Search Console and
      submit the removals or the redirects, whichever was decided.

## QA notes

- lychee 0.24.2 is installed via Homebrew, so `./scripts/qa.sh` no longer
  skips the link check. It runs against `dist/`.
- The two redirects lychee reports are a hint, not a finding: it suggests
  writing the resolved target URLs directly.
- lychee excludes `^https://kyde\.com`, so absolute self-links are not
  covered by the automated run and need checking by hand when pages move.
