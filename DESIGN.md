---
version: alpha
name: KYDE
description: >
  Dark-only engineering-blueprint aesthetic for KYDE, the behavioral firewall
  for AI agents. Derived from the shipped kyde.com main pages (homepage,
  platform, starter, trust-score, pricing). Target consumer: agents building
  KYDE product UI (dashboards) that must be indistinguishable in feel from
  the marketing site.
colors:
  bg-0: "#050505"
  bg-1: "#0C0C0C"
  bg-2: "#141414"
  bg-3: "#1C1C1C"
  line-0: "#1F1F1F"
  line-1: "#2E2E2E"
  primary: "#F2F2F2"
  ink-0: "#F2F2F2"
  ink-1: "#A8A8A8"
  ink-2: "#6B6B6B"
  ink-3: "#3D3D3D"
  on-primary: "#0A0A0A"
  cta-fill: "#FFFFFF"
  cta-fill-hover: "#E5E5E5"
  gold: "#FEC106"
  ember: "#D77657"
  live: "#3DDC84"
  alert: "#FF5C5C"
  warn: "#FFB84D"
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

KYDE looks like an **engineering document that happens to be interactive** — a spec sheet, a blueprint, a signed audit ledger. Not a SaaS marketing gradient in sight. The aesthetic is dark-only, monochrome-first, 1px-ruled, and typographically strict. Two registers coexist on every screen: **Inter** carries the human argument (headlines, prose), **JetBrains Mono** carries everything machine-adjacent (labels, numbers, statuses, terminals, table headers). The tension between the two *is* the brand.

Three ideas govern every design decision:

1. **The border is the design.** Structure comes from 1px lines (`{colors.line-0}`) and stepped background shades, never from shadows, gradients, or rounded corners. Sections sit inside vertical "blueprint rails" — thin left/right borders that run the full height of the page and make the whole product read as one continuous technical drawing.
2. **Motion is an argument, not decoration.** Every animation enacts a product claim: particles crossing a boundary and getting signed (the firewall), a radar sweep revealing shadow agents, a hash chain visibly breaking when tampered with, a counter racing to show an imbalance. If a proposed animation does not dramatize a specific claim, it does not ship. Everything respects `prefers-reduced-motion` with a static, still-meaningful fallback frame.
3. **Restraint reads as competence.** Body text is grey, not white. Accents are rare and semantic (green = living/verified data, red = blocked/alert). The one place pure white appears as a fill is the primary CTA button — which is exactly why it works.

The product this file exists to skin (dashboards, consoles) already has an in-market reference: the "Fleet Status" mock on kyde.com/platform. When in doubt, build what that mock implies at full fidelity.

## Colors

The palette is four background steps, two line weights, four ink weights, and six semantic accents. Monochrome does the layout; accents do the *meaning*.

**Backgrounds — four steps of elevation, darkest is the page:**
- **bg-0 (#050505):** The page canvas. Everything sits on this.
- **bg-1 (#0C0C0C):** Section panels and standard cards. One step of elevation.
- **bg-2 (#141414):** Elevated surfaces: modals, code blocks, sidebars, cards-within-cards.
- **bg-3 (#1C1C1C):** Hover states and chips. The top of the elevation ladder.

**Lines:**
- **line-0 (#1F1F1F):** The workhorse. Every divider, card border, table rule, section separator is a 1px line in this color.
- **line-1 (#2E2E2E):** Emphasis. Hover states brighten a border from line-0 to line-1; modals and outward-facing components use it at rest.

**Ink — never pure white for text:**
- **ink-0 (#F2F2F2):** Headlines and primary values. This is the "white" of the system; #FFFFFF is reserved for the CTA fill only.
- **ink-1 (#A8A8A8):** All body copy and secondary text. Most text on any screen is this color.
- **ink-2 (#6B6B6B):** Metadata, eyebrow labels, figure labels. Never the sole carrier of essential information.
- **ink-3 (#3D3D3D):** Decorative only.

**Accents — semantic, rare, and consistent everywhere:**
- **live (#3DDC84):** Living data. Status dots, terminal `$` prompts, verified/signed states, success checkmarks, healthy metrics. The most-used accent, and the one that makes the dark UI feel alive.
- **alert (#FF5C5C):** Blocked actions, breaches, tamper events, urgent deadlines. In the product's story, red is not an error state — it is the firewall *working* (an out-of-policy action being stopped). Treat it with that confidence.
- **warn (#FFB84D):** Warnings, "most popular" badges, mid-severity states.
- **gold (#FEC106):** Editorial accent for numbering (step numbers, figure indices) and manifest lines. Also the text-selection background. Never a status color.
- **ember (#D77657):** Emphasis without alarm — category labels and gap-indicators where red would overstate.
- **acid (#DFF250):** Surface highlight only. Never on buttons, never on links, never as a status.

Accent fills are almost always transparent washes of the accent at 5–10% opacity behind accent-colored text (e.g. a "Free" chip is `live` text on `live/8%` background with a `live/30%` border), not solid fills.

## Typography

Two families, strictly divided by role:

- **Inter Variable** — the voice. Hero statements, section headings, body prose. Headlines are bold, tightly tracked (−0.02em), and set at a compressed line-height (0.92–1.05). Hero headlines are UPPERCASE.
- **JetBrains Mono Variable** — the machine. Everything that represents data, structure, or interface chrome: eyebrow/section labels, buttons, table headers, statuses, timestamps, IDs, terminal content, figure labels, numbers in stat tiles. Mono labels are UPPERCASE with wide tracking (0.1em–0.2em); mono data (IDs, values) is normal case with tight tracking.

The signature typographic device is the **numbered section register**: every major surface region opens with a mono eyebrow in the format `01 · Section Name` (`{typography.register}`, ink-1, uppercase), sitting on a 1px `line-0` rule. Numbering restarts per page/screen. In a dashboard, panel headers take the same treatment (see the platform Fleet Status mock: `FLEET HEALTH SCORE`, `AGENTS (3)`, `RECENT SESSIONS (3)` — all mono, uppercase, tracked, small).

Scale notes for agents:
- The `hero` token is the desktop size (72px); it steps down responsively (mobile ≈ 36px, tablet ≈ 48–60px). Dashboards rarely need `hero`; a screen title is `h2` at most.
- Buttons are always mono, uppercase, small (`label-caps`), with a trailing `→` or `>` glyph. Button text is never Inter, never sentence-case.
- Big numbers (scores, KPIs) are mono bold at display sizes (e.g. a 78/100 health score renders the "78" at ~3rem mono bold ink-0, the "/100" small and ink-0 at 30% opacity).

## Layout

- **Container:** max-width 1280px (80rem), centered, 24px side padding. On desktop the container carries **1px vertical borders on both sides** (`line-0`) — the blueprint rails. In a dashboard context the equivalent is: every panel region is explicitly ruled; nothing floats in undefined space.
- **Section rhythm:** generous — 64–96px vertical padding between major regions on marketing pages, proportionally tighter (24–48px) inside dashboard panels. When in doubt, add more air: the system's density comes from fine lines and small mono type, not from cramming.
- **Separation by border, not by gap:** adjacent regions share a single 1px `line-0` border (`border-top`), and lists/grids of cards use single-border wrappers with internal 1px dividers (divide-x / divide-y) rather than per-card borders with gaps. The result reads as one ruled sheet, not floating cards.
- **The dotted grid:** hero/empty regions may carry a subtle dot-matrix background — 1px dots of `ink-0` at ~13% opacity on a 28px grid, masked to fade out radially. This is the "graph paper" of the blueprint language. Use sparingly; one region per screen.
- **Grids:** 2–5 columns, collapsing to one column below 768px. Sidebars in dashboard layouts are fixed-width (~176px), `bg-2`, hidden on mobile so the main panel gets full width.
- **Figures get labels:** every diagram, chart, or mock carries a `fig-label` (mono, 10px, 0.2em tracking, ink-2, uppercase) in the format `FIG.1 · Fleet view`, positioned at the region's top corner. This one detail does a large share of the "engineering document" feel.

## Elevation & Depth

There are **no drop shadows anywhere**. Depth is expressed exclusively through:

1. **Background steps:** bg-0 → bg-1 → bg-2 → bg-3. A surface one step lighter reads as one level closer.
2. **Border brightening:** hover raises `line-0` to `line-1`, or from `white/25` to `white`; active/selected states use `bg-3` washes.
3. **Backdrop blur for overlays only:** modal and fixed-header backdrops use the page color at 70–95% opacity plus `backdrop-blur` — the only "soft" effect in the system.

Never combine a background-step change and a border brightening on the same hover; pick one.

## Shapes

**Everything is a rectangle with square corners.** Border-radius is 0 on every panel, card, button, input, table, modal, chip, and tag. The only circles in the system are:

- Status dots (6–10px, `rounded.dot`), often with a slow pulse animation when the status is live.
- The three decorative "window chrome" dots on terminal/browser mocks (red/amber/green at 40–60% opacity).

Iconography is minimal, stroke-based (1.5–2px stroke, no fills), and used sparingly: checkmarks (`live`), X-marks (`alert` or ink-2), arrows (`→`). No icon library aesthetic; most "icons" are typographic glyphs (→, ✓, ✕, $, ↓).

## Components

**Buttons.** Exactly two variants (see tokens). Primary: white fill, near-black mono uppercase text, square corners. Ghost: transparent with a 1px `white/25`–`line-1` border, ink-1 text, brightening to white border + ink-0 text on hover. Every button ends in `→` (or `>` in compact navbar contexts), and the arrow nudges 2px to the right on hover (via a gap transition — a signature micro-interaction). In any pair, "the one action we actually want" is primary and sits to the right; the secondary yields first when space is tight.

**Cards / panels.** `bg-1` on `bg-0`, 1px `line-0` border, 24–32px padding, square. Hover states (only where the whole card is a link): background to `bg-2` **or** border to `line-1`, never both. Dashboard stat tiles are the compact form: a `fig-label`-style mono label on top, a large mono bold value below.

**Tables.** Semantic tables inside a single 1px border; header row on `bg-0` with mono uppercase tracked labels (`table-header`); body rows divided by `line-0`, `body-sm` ink-1 text; row hover `bg-3`. In comparison tables, the emphasized column gets ink-0 text and a barely-there wash. Wide tables scroll horizontally inside their own wrapper, never the page.

**Terminal / code blocks.** `bg-1` (or `bg-0` inside a `bg-1` region) with window chrome (three dots + a mono path/URL slug in a bordered pill), mono body, green `$` prompts, comments in `white/25`, output lines in `live` for success. A `COPY` button in the chrome copies real commands and flips to `COPIED` for 1.4s. Terminals show *plausible real* content — actual commands, realistic IDs like `agent:b6068d94edf0`, timestamps — never lorem-ipsum-grade filler.

**Status & chips.** Mono, 9–10px, uppercase, wide-tracked, accent-colored text with an accent/30% 1px border and optional accent/8% fill: `● STABLE` (live), `BREACH` (alert), `FREE` (live), `ENTERPRISE` (ink with lock glyph). Live statuses pair with a pulsing dot.

**Forms.** Labels above fields (`body-sm`-ish, 12px, ink-1). Inputs: `bg-1`, 1px `line-0` border, ink-0 text, ink-2 placeholder, focus = border brightens to ink-0 (no glow, no ring, square). Validation via native mechanisms; success states swap in-place with a green check in a `live/10%` circle.

**Modal.** Centered, max-width ~512px, `bg-2` with `line-1` border, page-color backdrop at 70% + blur. Closes on backdrop, X, and Escape.

**The dashboard reference (Fleet Status).** The canonical product-UI composition, already shipped as a mock: fixed mono sidebar (`bg-2`, ~176px, tiny mono nav items, active item on a `bg-3` wash) · main panel with a mono screen title + one-line ink-2 subtitle · a hero metric panel (big mono score, status chip, labeled 1px-thin progress bars using `live/60%` fills on `bg-3` tracks) · an alert banner (`alert/30%` border, `alert/5%` fill, pulsing dot, mono uppercase label, "View incident →" ghost affordance) · a row of stat tiles · dense mono data tables. Rebuild screens in this grammar and they will look like KYDE.

**Signature figures & animation grammar.** The marketing site's identity pieces, and the rules they encode for any new animated component:
- *The firewall / data-stream (canvas):* small 2px square particles drift as ungoverned noise, cross a shimmering 1px vertical boundary, and either snap into an ordered lattice with a brief green pulse (signed) or bounce off with a red ✕ flash (blocked). Occasional soft radial bloom at the crossing point. This is the product thesis as physics.
- *The radar (SVG):* a slow sweep that reveals blips — shadow agents becoming visible.
- *The hash chain:* mono chain of `#a4d1 ── #a4d2 ✓` cells appending on a ~2s tick; periodically a tamper attempt turns one cell red and visibly breaks every link after it (`─╳─`), with a status line announcing the rejection, then heals.
- Rules for all of the above: `requestAnimationFrame` loops gated by `IntersectionObserver` (paused off-screen); an explicit `prefers-reduced-motion` branch rendering one static meaningful frame; palette limited to ink-0 washes plus `live`/`alert`/`gold` for events; geometry limited to 1–2.5px squares, dots, and 1px lines — never smooth blobby shapes.
- Ambient micro-motion allowed: scroll-reveal (12px rise + fade, once, 0.4s), bar fills growing to width on reveal (1.2s cubic-bezier), SVG paths drawing themselves (stroke-dashoffset), a 1.1s-blink green terminal cursor, 7s float on hovering detail cards.

## Do's and Don'ts

**Do**
- Do use 1px `line-0` borders as the primary structural device; put visible rules around and between everything.
- Do label every figure, panel, and region with small uppercase mono (`01 · …`, `FIG.1 · …`, `AGENTS (3)`).
- Do keep body text ink-1 grey and reserve ink-0 for headlines and key values.
- Do use green (`live`) for anything alive, verified, or signed, and red (`alert`) for anything blocked — and treat a blocked-red state as the product succeeding, not erroring.
- Do end buttons with `→` and keep them mono + uppercase.
- Do give animations a claim to argue, an off-screen pause, and a reduced-motion fallback.
- Do use realistic data in mocks (plausible agent IDs, timestamps, models, costs).

**Don't**
- Don't use border-radius on anything except status dots.
- Don't use drop shadows, glows, or colored gradients (the only gradients are black-to-transparent overlay fades and the single red→green health-scale strip).
- Don't use pure #FFFFFF for text, or `acid` on buttons/links, or `gold` as a status color.
- Don't introduce a light mode; the system is dark-only by definition.
- Don't use em-dashes in any user-facing copy (house rule; use periods, colons, or commas).
- Don't set button or label text in Inter, or body prose in mono.
- Don't animate for delight alone, and don't let any animation run while off-screen.
- Don't add a third button variant, a shadowed card, or an icon library — if a component seems to need them, the composition is wrong, not the system.
