---
version: alpha
name: KYDE
description: >
  Engineering-blueprint aesthetic for KYDE, the behavioral firewall for AI
  agents. Derived from the shipped kyde.com main pages (homepage, platform,
  starter, trust-score, pricing). Two themes ship from the same token set:
  dark (default, always available) and light (implemented, currently not
  exposed via a UI toggle on the public marketing site, but fully supported
  and the intended target for product/dashboard UI). Target consumer: agents
  building KYDE product UI (dashboards) that must be indistinguishable in
  feel from the marketing site, in either theme.
colors:
  # Dark is the default theme; component tokens below resolve against
  # this flat map. See colors-light for the light-theme equivalents
  # (same keys, same component mapping, values only).
  bg-0: "#050505"
  bg-1: "#0C0C0C"
  bg-2: "#141414"
  bg-3: "#1C1C1C"
  line-0: "#1F1F1F"
  line-1: "#2E2E2E"
  ink-0: "#F2F2F2"
  ink-1: "#A8A8A8"
  ink-2: "#6B6B6B"
  ink-3: "#3D3D3D"
  cta-fill: "#F2F2F2"
  cta-fill-hover: "#E5E5E5"
  on-primary: "#0A0A0A"
  gold: "#FEC106"
  ember: "#D77657"
  live: "#3DDC84"
  alert: "#FF5C5C"
  warn: "#FFB84D"
  acid: "#DFF250"
colors-light:
  # Same token names as colors (dark), same component mapping applies
  # 1:1 (button-primary uses colors-light.cta-fill in light mode, etc).
  # Not machine-linted against components; documented in prose below.
  bg-0: "#F7F6F3"
  bg-1: "#F3F2EE"
  bg-2: "#EEEDE8"
  bg-3: "#E6E4DE"
  line-0: "#DAD7CF"
  line-1: "#BFBCB2"
  ink-0: "#191919"
  ink-1: "#4F4F4F"
  ink-2: "#767676"
  ink-3: "#C8C8C8"
  cta-fill: "#191919"
  cta-fill-hover: "#333330"
  on-primary: "#F7F6F3"
  gold: "#9C7400"
  ember: "#B34A2E"
  live: "#0B8A50"
  alert: "#D93036"
  warn: "#955F00"
  acid: "#DFF250"
typography:
  hero:
    fontFamily: Inter Variable
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.022em
  h2:
    fontFamily: Inter Variable
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter Variable
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: Inter Variable
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter Variable
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  register:
    fontFamily: JetBrains Mono Variable
    fontSize: 0.6875rem
    fontWeight: 400
    letterSpacing: 0.2em
  label-caps:
    fontFamily: JetBrains Mono Variable
    fontSize: 0.75rem
    fontWeight: 400
    letterSpacing: 0.1em
  fig-label:
    fontFamily: JetBrains Mono Variable
    fontSize: 0.625rem
    fontWeight: 400
    letterSpacing: 0.2em
  data:
    fontFamily: JetBrains Mono Variable
    fontSize: 0.625rem
    fontWeight: 400
    letterSpacing: 0.02em
  data-value:
    fontFamily: JetBrains Mono Variable
    fontSize: 1.25rem
    fontWeight: 700
  terminal:
    fontFamily: JetBrains Mono Variable
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.8
rounded:
  none: 0px
  dot: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  button-primary:
    backgroundColor: "{colors.cta-fill}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 14px 24px
  button-primary-hover:
    backgroundColor: "{colors.cta-fill-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-1}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 14px 24px
  button-ghost-hover:
    textColor: "{colors.ink-0}"
  card:
    backgroundColor: "{colors.bg-1}"
    rounded: "{rounded.none}"
    padding: 32px
  card-hover:
    backgroundColor: "{colors.bg-2}"
  card-elevated:
    backgroundColor: "{colors.bg-2}"
    rounded: "{rounded.none}"
    padding: 32px
  input:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.ink-0}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 10px 16px
  table-header:
    backgroundColor: "{colors.bg-0}"
    textColor: "{colors.ink-1}"
    typography: "{typography.register}"
    padding: 12px 20px
  table-cell:
    textColor: "{colors.ink-1}"
    typography: "{typography.body-sm}"
    padding: 14px 20px
  sidebar:
    backgroundColor: "{colors.bg-2}"
    width: 176px
  sidebar-item:
    textColor: "{colors.ink-2}"
    typography: "{typography.data}"
    padding: 4px 8px
  sidebar-item-active:
    backgroundColor: "{colors.bg-3}"
    textColor: "{colors.ink-0}"
  chip-status-live:
    backgroundColor: "transparent"
    textColor: "{colors.live}"
    typography: "{typography.fig-label}"
    padding: 2px 6px
  chip-status-alert:
    backgroundColor: "transparent"
    textColor: "{colors.alert}"
    typography: "{typography.fig-label}"
    padding: 2px 6px
  chip-status-warn:
    backgroundColor: "transparent"
    textColor: "{colors.warn}"
    typography: "{typography.fig-label}"
    padding: 2px 6px
  tag-prevent:
    backgroundColor: "transparent"
    textColor: "{colors.ember}"
    typography: "{typography.fig-label}"
    padding: 2px 4px
  step-number:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    typography: "{typography.label-caps}"
  modal:
    backgroundColor: "{colors.bg-2}"
    rounded: "{rounded.none}"
    padding: 32px
---

## Overview

KYDE looks like an **engineering document that happens to be interactive** — a spec sheet, a blueprint, a signed audit ledger. Not a SaaS marketing gradient in sight. The aesthetic is monochrome-first, 1px-ruled, and typographically strict, in both themes it ships. Two registers coexist on every screen: **Inter** carries the human argument (headlines, prose), **JetBrains Mono** carries everything machine-adjacent (labels, numbers, statuses, terminals, table headers). The tension between the two *is* the brand.

**Dark is the default and the primary reference.** Light is a fully implemented second theme (same components, same layout, same rules), currently not exposed via a UI toggle on the public marketing site, but the intended surface for product/dashboard UI going forward. Build dashboards so they work correctly in both from day one; do not treat light as an afterthought skin.

Three ideas govern every design decision:

1. **The border is the design.** Structure comes from 1px lines (`{colors.line-0}`) and stepped background shades, never from shadows, gradients, or rounded corners. Sections sit inside vertical "blueprint rails" — thin left/right borders that run the full height of the page and make the whole product read as one continuous technical drawing.
2. **Motion is an argument, not decoration.** Every animation enacts a product claim: particles crossing a boundary and getting signed (the firewall), a radar sweep revealing shadow agents, a hash chain visibly breaking when tampered with, a counter racing to show an imbalance. If a proposed animation does not dramatize a specific claim, it does not ship. Everything respects `prefers-reduced-motion` with a static, still-meaningful fallback frame, and every animated figure must re-read its palette from CSS custom properties (never hardcoded rgb triples) so it inverts correctly on theme change.
3. **Restraint reads as competence.** Body text is grey, not the extreme ink value. Accents are rare and semantic (green = living/verified data, red = blocked/alert). The one place the extreme "white" value appears as a solid fill is the primary CTA button — which is exactly why it works, in both themes.

The product this file exists to skin (dashboards, consoles) already has an in-market reference: the "Fleet Status" mock on kyde.com/platform. When in doubt, build what that mock implies at full fidelity.

## Colors

The palette is four background steps, two line weights, four ink weights, and six semantic accents, defined once per theme. Monochrome does the layout; accents do the *meaning*. Never hardcode a hex value in a component; always reference the token, so the same markup renders correctly in both themes.

### Dark (default)

**Backgrounds — four steps of elevation, darkest is the page:**
- **bg-0 (#050505):** The page canvas. Everything sits on this.
- **bg-1 (#0C0C0C):** Section panels and standard cards. One step of elevation.
- **bg-2 (#141414):** Elevated surfaces: modals, code blocks, sidebars, cards-within-cards.
- **bg-3 (#1C1C1C):** Hover states and chips. The top of the elevation ladder.

**Lines:**
- **line-0 (#1F1F1F):** The workhorse. Every divider, card border, table rule, section separator is a 1px line in this color.
- **line-1 (#2E2E2E):** Emphasis. Hover states brighten a border from line-0 to line-1; modals and outward-facing components use it at rest.

**Ink — never the literal extreme for text:**
- **ink-0 (#F2F2F2):** Headlines and primary values. The "white" of the system for text purposes; pure #FFFFFF never appears.
- **ink-1 (#A8A8A8):** All body copy and secondary text. Most text on any screen is this color.
- **ink-2 (#6B6B6B):** Metadata, eyebrow labels, figure labels. Never the sole carrier of essential information.
- **ink-3 (#3D3D3D):** Decorative only.

**CTA fill (the one solid, non-monochrome-rule fill in the system):**
- **cta-fill (#F2F2F2):** The primary button's background. The brightest surface on the page.
- **cta-fill-hover (#E5E5E5):** Its hover state.
- **on-primary (#0A0A0A):** Text/icon color on top of the CTA fill.

**Accents — semantic, rare, and consistent everywhere:**
- **live (#3DDC84):** Living data. Status dots, terminal `$` prompts, verified/signed states, success checkmarks, healthy metrics. The most-used accent, and the one that makes the dark UI feel alive.
- **alert (#FF5C5C):** Blocked actions, breaches, tamper events, urgent deadlines. In the product's story, red is not an error state — it is the firewall *working* (an out-of-policy action being stopped). Treat it with that confidence.
- **warn (#FFB84D):** Warnings, "most popular" badges, mid-severity states.
- **gold (#FEC106):** Editorial accent for numbering (step numbers, figure indices) and manifest lines. Also the text-selection background. Never a status color.
- **ember (#D77657):** Emphasis without alarm — category labels and gap-indicators where red would overstate.
- **acid (#DFF250):** Surface highlight only. Never on buttons, never on links, never as a status. Identical value in both themes; used extremely sparingly.

### Light

Light is a deliberate inversion, not a mechanical one. The canvas is warm paper, not clinical white; elevation recesses (steps slightly *darker/greyer* than the canvas) rather than lifts, so cards never read as a jarring white sticker sitting on the page. The "ink-0 / cta-fill" extreme flips to near-black. Accents are darkened versions of their dark-mode selves to hold WCAG AA contrast on the light ground.

**Backgrounds — four steps of elevation, lightest is the page:**
- **bg-0 (#F7F6F3):** The page canvas. Warm paper, not #FFFFFF.
- **bg-1 (#F3F2EE):** Section panels and standard cards. One recess step, slightly darker than the canvas.
- **bg-2 (#EEEDE8):** Elevated surfaces: modals, code blocks, sidebars, cards-within-cards.
- **bg-3 (#E6E4DE):** Hover states and chips. The deepest recess step.

**Lines:**
- **line-0 (#DAD7CF):** The workhorse divider/border color.
- **line-1 (#BFBCB2):** Emphasis, same role as in dark.

**Ink:**
- **ink-0 (#191919):** Headlines and primary values. Near-black, never pure #000000.
- **ink-1 (#4F4F4F):** Body copy and secondary text.
- **ink-2 (#767676):** Metadata, eyebrow labels, figure labels.
- **ink-3 (#C8C8C8):** Decorative only.

**CTA fill:**
- **cta-fill (#191919):** The primary button's background flips to near-black, the darkest surface on the page, so it remains the single highest-contrast fill regardless of theme.
- **cta-fill-hover (#333330):** Its hover state.
- **on-primary (#F7F6F3):** Text/icon color on top of the CTA fill (paper-colored, not white).

**Accents (darkened for AA contrast on light ground):**
- **live (#0B8A50)**
- **alert (#D93036)**
- **warn (#955F00)**
- **gold (#9C7400)**
- **ember (#B34A2E)**
- **acid (#DFF250)** — unchanged; used as a rare surface highlight, never text.

**Opting a component out of theming:** figures, terminals, and dashboard mocks that must stay permanently dark for legibility or brand reasons (code blocks, some data-dense mocks) use a `.dark-island` escape hatch: inside it, all tokens above resolve to their dark values regardless of the active theme. Use this sparingly and only where the content genuinely reads worse inverted (e.g. a terminal window) — do not reach for it as a shortcut to avoid theming a component properly. The default assumption for any new component is that it themes correctly, not that it opts out.

Accent fills are almost always transparent washes of the accent at 5–10% opacity behind accent-colored text (e.g. a "Free" chip is `live` text on `live/8%` background with a `live/30%` border), not solid fills. This holds in both themes; only the underlying accent hex changes.

## Typography

Two families, strictly divided by role, identical across both themes:

- **Inter Variable** — the voice. Hero statements, section headings, body prose. Headlines are bold, tightly tracked (−0.02em), and set at a compressed line-height (0.92–1.05). Hero headlines are UPPERCASE.
- **JetBrains Mono Variable** — the machine. Everything that represents data, structure, or interface chrome: eyebrow/section labels, buttons, table headers, statuses, timestamps, IDs, terminal content, figure labels, numbers in stat tiles. Mono labels are UPPERCASE with wide tracking (0.1em–0.2em); mono data (IDs, values) is normal case with tight tracking.

The signature typographic device is the **numbered section register**: every major surface region opens with a mono eyebrow in the format `01 · Section Name` (`{typography.register}`, ink-1, uppercase), sitting on a 1px `line-0` rule. Numbering restarts per page/screen. In a dashboard, panel headers take the same treatment (see the platform Fleet Status mock: `FLEET HEALTH SCORE`, `AGENTS (3)`, `RECENT SESSIONS (3)` — all mono, uppercase, tracked, small).

**The applied ramp.** The tokens above give the sizes; this is which one a
heading gets, and there are only four. Every heading on the marketing site is
one of these, exactly as written. Nothing in between, and no new step without
changing this list.

| Level | Where it goes | Classes |
|---|---|---|
| Home hero | The homepage `h1`, once | `text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl` |
| Page hero | Every other page's `h1`, once, one step below the home hero | `text-4xl md:text-5xl lg:text-6xl` |
| Section | The one statement a section exists to make | `text-3xl md:text-4xl lg:text-5xl` |
| Subsection | A heading inside a section that already has one | `text-2xl md:text-3xl` |
| Item | One card, step or row in a grid or list | `text-xl md:text-2xl` |

A page reads as a hierarchy when each section makes one statement at Section
size and everything under it steps down. Two Section-size headings in one
region is the usual sign that the region is really two.

Scale notes for agents:
- The `hero` token is the desktop size (72px); it steps down responsively (mobile ≈ 36px, tablet ≈ 48–60px). Dashboards rarely need `hero`; a screen title is `h2` at most.
- Buttons are always mono, uppercase, small (`label-caps`), with a trailing `→` or `>` glyph. Button text is never Inter, never sentence-case.
- Big numbers (scores, KPIs) are mono bold at display sizes (e.g. a 78/100 health score renders the "78" at ~3rem mono bold ink-0, the "/100" small and ink-0 at 30% opacity).

## Layout

- **Container:** max-width 1280px (80rem), centered, 24px side padding. On desktop the container carries **1px vertical borders on both sides** (`line-0`) — the blueprint rails. In a dashboard context the equivalent is: every panel region is explicitly ruled; nothing floats in undefined space.
- **Section rhythm:** generous — 64–96px vertical padding between major regions on marketing pages, proportionally tighter (24–48px) inside dashboard panels. When in doubt, add more air: the system's density comes from fine lines and small mono type, not from cramming.
- **Separation by border, not by gap:** adjacent regions share a single 1px `line-0` border (`border-top`), and lists/grids of cards use single-border wrappers with internal 1px dividers (divide-x / divide-y) rather than per-card borders with gaps. The result reads as one ruled sheet, not floating cards.
- **The dotted grid:** hero/empty regions may carry a subtle dot-matrix background — 1px dots of `ink-0` at ~13% opacity on a 28px grid, masked to fade out radially. This is the "graph paper" of the blueprint language. Use sparingly; one region per screen. Works unchanged in both themes since it references `ink-0`.
- **Grids:** 2–5 columns, collapsing to one column below 768px. Sidebars in dashboard layouts are fixed-width (~176px), `bg-2`, hidden on mobile so the main panel gets full width.
- **Figures get labels:** every diagram, chart, or mock carries a `fig-label` (mono, 10px, 0.2em tracking, ink-2, uppercase) in the format `FIG.1 · Fleet view`, positioned at the region's top corner. This one detail does a large share of the "engineering document" feel.

## Elevation & Depth

There are **no drop shadows anywhere**, in either theme. Depth is expressed exclusively through:

1. **Background steps:** bg-0 → bg-1 → bg-2 → bg-3. In dark this is a *lift* (each step brighter); in light it is a *recess* (each step slightly darker/greyer than the canvas) — same token names, same visual logic of "further from the page," opposite literal direction. A surface one step further from bg-0 always reads as one level closer/more elevated.
2. **Border brightening:** hover raises `line-0` to `line-1` (or the theme's equivalent contrast step); active/selected states use `bg-3` washes.
3. **Backdrop blur for overlays only:** modal and fixed-header backdrops use the page color at 70–95% opacity plus `backdrop-blur` — the only "soft" effect in the system.

Never combine a background-step change and a border brightening on the same hover; pick one.

## Shapes

**Everything is a rectangle with square corners.** Border-radius is 0 on every panel, card, button, input, table, modal, chip, and tag, in both themes. The only circles in the system are:

- Status dots (6–10px, `rounded.dot`), often with a slow pulse animation when the status is live.
- The three decorative "window chrome" dots on terminal/browser mocks (red/amber/green at 40–60% opacity).

Iconography is minimal, stroke-based (1.5–2px stroke, no fills), and used sparingly: checkmarks (`live`), X-marks (`alert` or ink-2), arrows (`→`). No icon library aesthetic; most "icons" are typographic glyphs (→, ✓, ✕, $, ↓).

## Components

**Buttons.** Exactly two variants (see tokens). Primary: `cta-fill` background, `on-primary` uppercase mono text, square corners — the brightest surface in dark, the darkest surface in light, always the single highest-contrast element on screen. Ghost: transparent with a 1px `line-1`-strength border, ink-1 text, brightening to a full-contrast border + ink-0 text on hover. Every button ends in `→` (or `>` in compact navbar contexts), and the arrow nudges 2px to the right on hover (via a gap transition — a signature micro-interaction). In any pair, "the one action we actually want" is primary and sits to the right; the secondary yields first when space is tight.

**Cards / panels.** `bg-1` on `bg-0`, 1px `line-0` border, 24–32px padding, square. Hover states (only where the whole card is a link): background to `bg-2` **or** border to `line-1`, never both. Dashboard stat tiles are the compact form: a `fig-label`-style mono label on top, a large mono bold value below.

**Tables.** Semantic tables inside a single 1px border; header row on `bg-0` with mono uppercase tracked labels (`table-header`); body rows divided by `line-0`, `body-sm` ink-1 text; row hover `bg-3`. In comparison tables, the emphasized column gets ink-0 text and a barely-there wash. Wide tables scroll horizontally inside their own wrapper, never the page.

**Terminal / code blocks.** These default to `.dark-island` in both themes (see Colors → "Opting a component out of theming"): `bg-1`/`bg-0` dark values with window chrome (three dots + a mono path/URL slug in a bordered pill), mono body, green `$` prompts, comments at low ink-0 opacity, output lines in `live` for success. A `COPY` button in the chrome copies real commands and flips to `COPIED` for 1.4s. Terminals show *plausible real* content — actual commands, realistic IDs like `agent:b6068d94edf0`, timestamps — never lorem-ipsum-grade filler.

**Status & chips.** Mono, 9–10px, uppercase, wide-tracked, accent-colored text with an accent/30% 1px border and optional accent/8% fill: `● STABLE` (live), `BREACH` (alert), `FREE` (live), `ENTERPRISE` (ink with lock glyph). Live statuses pair with a pulsing dot.

**Forms.** Labels above fields (`body-sm`-ish, 12px, ink-1). Inputs: `bg-1`, 1px `line-0` border, ink-0 text, ink-2 placeholder, focus = border brightens to ink-0-strength (no glow, no ring, square). Validation via native mechanisms; success states swap in-place with a green check in a `live/10%` circle.

**Modal.** Centered, max-width ~512px, `bg-2` with `line-1` border, page-color backdrop at 70% + blur. Closes on backdrop, X, and Escape.

**The dashboard reference (Fleet Status).** The canonical product-UI composition, already shipped as a mock: fixed mono sidebar (`bg-2`, ~176px, tiny mono nav items, active item on a `bg-3` wash) · main panel with a mono screen title + one-line ink-2 subtitle · a hero metric panel (big mono score, status chip, labeled 1px-thin progress bars using `live/60%` fills on `bg-3` tracks) · an alert banner (`alert/30%` border, `alert/5%` fill, pulsing dot, mono uppercase label, "View incident →" ghost affordance) · a row of stat tiles · dense mono data tables. This mock inverts correctly in light mode (its container is not `.dark-island`); rebuild screens in this grammar and they will look like KYDE in either theme.

**Signature figures & animation grammar.** The marketing site's identity pieces, and the rules they encode for any new animated component:
- *The firewall / data-stream (canvas):* small 2px square particles drift as ungoverned noise, cross a shimmering 1px vertical boundary, and either snap into an ordered lattice with a brief green pulse (signed) or bounce off with a red ✕ flash (blocked). Occasional soft radial bloom at the crossing point. This is the product thesis as physics.
- *The radar (SVG):* a slow sweep that reveals blips — shadow agents becoming visible.
- *The hash chain:* mono chain of `#a4d1 ── #a4d2 ✓` cells appending on a ~2s tick; periodically a tamper attempt turns one cell red and visibly breaks every link after it (`─╳─`), with a status line announcing the rejection, then heals.
- Rules for all of the above: `requestAnimationFrame` loops gated by `IntersectionObserver` (paused off-screen); an explicit `prefers-reduced-motion` branch rendering one static meaningful frame; palette read live from CSS custom properties (`getComputedStyle`) rather than hardcoded rgb triples, with a listener on theme-change so canvases/SVGs re-read and repaint immediately when the user switches themes; geometry limited to 1–2.5px squares, dots, and 1px lines — never smooth blobby shapes.
- Ambient micro-motion allowed: scroll-reveal (12px rise + fade, once, 0.4s), bar fills growing to width on reveal (1.2s cubic-bezier), SVG paths drawing themselves (stroke-dashoffset), a 1.1s-blink green terminal cursor, 7s float on hovering detail cards.

## Voice

**Write like Stripe, not like an AI company.** The two are easy to tell apart and the difference is not tone, it is whether a sentence carries information.

The house voice is plain, specific, and unhurried. It states what a thing does, names the constraint, and stops. It assumes the reader is competent and busy. A claim comes with the mechanism that makes it true, or it does not get made.

**Do**
- Lead with the concrete noun: "a hash-chained record", "one process area", "two weeks".
- Use numbers, names and limits. "Approve under 2,000, above that escalate" beats "intelligent thresholds".
- Say what a thing does not do, and where it stops. The boundary is the most credible sentence on any page.
- Keep sentences short enough to read once. Prefer a period to a comma and a comma to a semicolon.
- Let the verb do the work: records, blocks, recomputes, hands back, stops.

**Don't**
- No "empower", "unleash", "seamless", "transform", "revolutionize", "cutting-edge", "next-generation", "supercharge", "effortless", "game-changing".
- No "AI-powered", "AI-driven", "leveraging AI", "harness the power of". The product is not interesting because AI is in it.
- No sentence that would survive having the product name swapped for a competitor's. If it fits anyone, it says nothing.
- No superlatives we cannot show. "The most complete" is a claim about other people's products that we cannot check.
- No em-dashes (see below), and no exclamation marks anywhere.
- Do not sell the future in the present tense. A capability that is not built says so, in the same sentence, in the reader's words rather than in a roadmap chip.

**Write to the reader, never about them.** The people reading are running the
business being described. Three habits break that, and all three are easy to
fall into while writing quickly:

- *Explaining your own rhetoric.* "Naming these is what makes the other two
  believable" tells the reader why they should be convinced, which is the one
  argument that cannot work on somebody who is reading it. State the fact and
  let it do its own work.
- *Talking about them in the third person.* "The person who has to defend it
  internally" is the reader. Say "you".
- *Narrating your own sales motion.* "These pay for the first project" and
  "which is why there is a second project" describe our revenue, not their
  benefit. Cut them.

**Frame it positively when the positive frame is also the true one.** Work that
stays with a person is not a limitation to be disclosed, it is the judgement
your experts were hired for, and automating everything around it is what buys
them the room to do it. Say that, rather than listing legal risks. The negative
version is not more honest, it is just colder, and it makes an expensive
decision feel like a liability review.

The test: read the sentence out loud to somebody who runs the process being described. If they would nod, it ships. If they would wait for the actual point, it does not.

## Do's and Don'ts

**Do**
- Do use 1px `line-0` borders as the primary structural device; put visible rules around and between everything.
- Do label every figure, panel, and region with small uppercase mono (`01 · …`, `FIG.1 · …`, `AGENTS (3)`).
- Do keep body text at ink-1 and reserve ink-0 for headlines and key values, in both themes.
- Do use green (`live`) for anything alive, verified, or signed, and red (`alert`) for anything blocked — and treat a blocked-red state as the product succeeding, not erroring.
- Do end buttons with `→` and keep them mono + uppercase.
- Do give animations a claim to argue, an off-screen pause, a reduced-motion fallback, and a theme-change listener that repaints them from live token values.
- Do use realistic data in mocks (plausible agent IDs, timestamps, models, costs).
- Do build every new component so it themes correctly by default; reach for `.dark-island` only when content genuinely degrades when inverted (terminals, some code-dense mocks), not as a default shortcut.
- Do let elevation invert direction between themes (lift in dark, recess in light) while keeping the same token names and the same "further from bg-0 = more elevated" logic.

**Don't**
- Don't use border-radius on anything except status dots.
- Don't use drop shadows, glows, or colored gradients (the only gradients are canvas-to-transparent overlay fades and the single red→green health-scale strip).
- Don't fill a card or panel with a color brighter than the page canvas in light mode; elevation recesses, it never "lifts to white."
- Don't use the literal color-extreme (#FFFFFF / #000000) directly anywhere; use `ink-0`/`cta-fill`/`bg-0` tokens, which are near-extreme, theme-aware, and never pure.
- Don't use `acid` on buttons/links, or `gold` as a status color, in either theme.
- Don't use em-dashes in any user-facing copy (house rule; use periods, colons, or commas).
- Don't set button or label text in Inter, or body prose in mono.
- Don't animate for delight alone, and don't let any animation run while off-screen.
- Don't add a third button variant, a shadowed card, or an icon library — if a component seems to need them, the composition is wrong, not the system.
- Don't hardcode theme-specific hex values in component code; reference tokens so the component works in both themes automatically.
