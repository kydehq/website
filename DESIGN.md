# KYDE design system

Live since 2026-09-28. Built from the pitch deck (Pitch.pdf, September 2026):
calm, confident, not corporate. White paper, one rosé, black, neon as a
signal, fine lines, lots of whitespace. The website is a website, not a VC
pitch: the deck gives the language, the site gives the structure.

Everything below is implemented in `src/styles/global.css` (tokens and a
translation layer for older pages) and in `src/pages/index.astro` (the
reference page). A page built new should read the tokens, not copy values.

## Positioning and voice

- Category: **Behavioral scoring for AI agents.** One name everywhere
  (titles, meta, footer, llms.txt). Not "behavioral firewall" (kept only as a
  glossary term), not "zero trust layer" as a headline.
- The claim: **AI agents don't fail loudly. They fail expensively.**
- Two pains a buyer owns a budget for: money (runaway loops) and security
  (prompt injection). Drift is the mechanism underneath.
- The three stories, used on the home, /use-cases and in the films:
  (Loops) token burn overnight · (Hijack) an email makes an agent upload
  customer data · (Drift) a claims agent approves every claim after an update.
- The insight: banks score every card swipe; Kyde scores every agent action.
  Insurer angle: a telematics box for AI, "a behavioral score you can underwrite".
- How it works, always in this order: Observe · Learn · Score · Limit · Stop,
  with Prove under every step.
- Short sentences, one idea per block, no jargon. Mono labels in
  parentheses: `(Drift)`, `(Step 1)`. Footnotes with `*`: `*Illustrative`.
- "Built for" EU AI Act, NIS-2, DORA, never "compliant" or "ready".
- Claims stay within what ships: the free edition is hash-chained, signing
  and inline enforcement are Enterprise; Kyde does not claim to recognize
  every injection, it sees what the agent does next; a stop hands the
  decision to a human; all scene numbers are marked illustrative.
- Primary CTA: **Book a demo**.

## Color

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#FFFFFF` | the page |
| `--color-ink` | `#1C1A1B` | text, lines |
| `--color-ink-1/2` | `#4A4547` / `#6F6A6C` | body under a headline / sublines, meta |
| `--color-blush` (= `--color-pink`) | `#F8D9D4` | the one rosé: full surfaces and headline marks |
| `--color-card` | `#1E1E1E` | black: cards, tags, buttons, footer |
| `--color-violet` | `#302749` | own surface, max one per page, only for the evidence chapter |
| `--color-neon` | `#DEFD7E` | signal only |

Rules:
- Rosé opens and closes a page (hero, close). Everything between is white.
  No rosé bands or tinted panels in the middle.
- Black stays black. Violet is never a card, button or text color.
- No strong pink anywhere. No third accent.
- Primary buttons are black on every surface; hover shows rosé text. Never
  pink on pink.
- **Highlighting:** on white, a headline word gets a rosé mark, a phrase in
  running text a neon mark. On rosé: never. On black: neon is fine. The home
  uses one of each ("once", "burn money"). Marks are drawn as a band
  (`linear-gradient`) so they never reach into the line above.

## Type

Schibsted Grotesk (400/500) for everything read, IBM Plex Mono (500) for
labels, tags, meta. Both self-hosted via fontsource (no Google Fonts CDN;
the site promises no tracking).

Scale (tokens `--kx-*`): display (home stage), display-2 (page heroes and
closes), h1 (chapter headlines), sub (grey line under a headline), body-l,
body. Headlines are regular weight, tight tracking (−0.045 to −0.055em),
`text-wrap: balance`. Mono at zero tracking, never below 12px, sentence case.
Four text styles per block at most.

## Layout

- One measure for all pages: `--kx-max` 1440px, `--kx-pad` side margin,
  `--kx-hero-top` from nav to the first label, `--kx-sec` chapter rhythm.
  Every hero's first line sits at the same height and edge.
- Every page hero: `(Label)` in mono, then the headline in corner brackets.
- Chapters are separated by whitespace, never by a rule. Fine 1px ink rules
  only where they structure content: over columns, between list rows, tables.
- Chapter kicker: a black tag with the number in white, then the title in mono.
- No boxes around lists or card grids; one rule per item. Square corners,
  no shadows, no icons as decoration.
- The nav takes the color of the section under it (`data-surface` on the
  section: `blush`, `violet`, else paper).

## Motion and figures

Calm by default, motion only where it explains. The stage carries the three
films as tabs (landscape from 1024px, portrait below), silent until asked,
paused off screen and under reduced motion. The 1920s futurism of the deck
survives only in small marks (corner brackets, the dot band, a tilted tag).
Figures are drawn in ink, the stopped/wrong element rosé, the target neon.

Films live in `public/films/{tokenburn,promptinjection,claimsdrift}-{16x9,9x16}.{mp4,jpg}`,
re-encoded to ~1.2 MB (`ffmpeg -crf 26 -movflags +faststart`).

## Switches

`src/data/features.ts`: `SERVICES = false` hides the build service (nav,
footer, in-page links, workers on /use-cases; /services and /audit noindex
and out of the sitemap). Set to `true` to bring it back.

## Older pages

Most subpages are still written in Tailwind utility classes from the old
blueprint design. The translation layer at the end of `global.css` maps them
onto this system (weights, tracking, rules, boxes, tags, figure strokes,
hero and close). New or rewritten pages should use the tokens directly, the
way `index.astro` and `use-cases.astro` do.

## QA before every push

`npm run build`, `npm run qa:spell`, `npx html-validate "dist/**/*.html"`,
`npm run qa:links`, `npm run qa:i18n` (if an English page with a German
counterpart changes, update the German page, then `npm run qa:i18n -- --update`).
Check visual changes in a real browser, whole page, desktop and phone.

## Legal notice on articles

Every article carries the standing disclaimer, and it comes from one place:
`src/components/LegalNotice.astro`. Import it and drop `<LegalNotice />` in as
the last thing inside `<main>`. It picks German or English from the path, so an
article never has to know which language it is in, and the wording cannot drift
one page at a time.

It goes on articles: blog posts, glossary entries, guides, whitepapers,
comparisons, the regulatory explainers and everything under `/de/wissen/`.
Glossary entries inherit it through `GlossaryEntry.astro` and need nothing.
It does **not** go on product pages. A disclaimer under a price or a feature
list reads as a warning about the product rather than about a text.

Where a page needs more than the standard wording, pass it as a child rather
than editing the component: the two German regulatory articles add that the
official wording of the cited acts governs. Anything that would apply to every
article belongs in the component.

One accessibility consequence worth knowing: the notice is an `<aside>`, so any
page that already had an unnamed `<aside>` now has two landmarks and needs
`aria-label` on both. `npm run qa:html` catches this.

