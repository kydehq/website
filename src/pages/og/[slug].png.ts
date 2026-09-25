import type { APIRoute } from "astro";
import { readFileSync } from "node:fs";
import satori from "satori";
import sharp from "sharp";
import { CARD_PAGES, ogSlug } from "../../data/content-index";

// One card image per page, drawn at build time and written as a static PNG.
//
// Every page used to share a single black rectangle with the wordmark on it,
// which told a reader nothing about what they were about to open. These carry
// the page's own title, which is the whole reason a link preview exists.
//
// satori rather than an SVG with a <text> element, for one reason: it converts
// text to paths using a font buffer we pass in, so the output does not depend
// on what fonts the machine happens to have. The deploy runs on ubuntu-latest,
// which has essentially none. It also does the line wrapping, which is the part
// that is genuinely annoying to do by hand for titles of unpredictable length.
//
// The fonts are the .woff builds from @fontsource: satori reads ttf, otf and
// woff, and specifically not woff2, which is all @fontsource-variable ships.
// That is why the static font packages are dev dependencies.
export const prerender = true;

const FONTS = "node_modules/@fontsource";
const grotesk = readFileSync(`${FONTS}/schibsted-grotesk/files/schibsted-grotesk-latin-500-normal.woff`);
const mono = readFileSync(`${FONTS}/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff`);

// The mark itself, not a re-creation of it in a similar typeface. The asset is
// white on transparent; the card is blush, so it is recoloured to ink here.
const logo = Buffer.from(
  readFileSync("public/kyde-logo.svg", "utf8").replace(/#FFFDFD|white/gi, "#2B2226"),
).toString("base64");

// Since the September 2026 rebrand: the blush surface, ink type, the deck's
// mono label in parentheses and its corner brackets around the title.
const W = 1200;
const H = 630;
const BG = "#F8D9D4";
const INK = "#2B2226";

// Long titles get smaller type rather than more lines. Four lines at 60px is
// the point where the card stops reading as a headline and starts reading as a
// paragraph, so the size steps down before the line count climbs.
const titleSize = (title: string): number => {
  if (title.length > 78) return 46;
  if (title.length > 54) return 54;
  if (title.length > 32) return 62;
  return 72;
};

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: children === undefined ? { style } : { style, children },
});

export function getStaticPaths() {
  return CARD_PAGES.map((entry) => ({
    params: { slug: ogSlug(entry.href) },
    props: { title: entry.title, kind: entry.kind },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { title, kind } = props as { title: string; kind: string };

  const svg = await satori(
    el(
      "div",
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: W,
        height: H,
        backgroundColor: BG,
        padding: "72px",
      },
      [
        el("div", { display: "flex", fontFamily: "IBM Plex Mono", fontSize: 24, color: INK }, `(${kind})`),
        el("div", { display: "flex", position: "relative", paddingLeft: 40, paddingTop: 18, paddingBottom: 18 }, [
          el("div", { position: "absolute", left: 0, top: 0, width: 22, height: 22, borderLeft: `3px solid ${INK}`, borderTop: `3px solid ${INK}` }),
          el("div", { position: "absolute", left: 0, bottom: 0, width: 22, height: 22, borderLeft: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }),
          el("div", { display: "flex", fontFamily: "Schibsted Grotesk", fontWeight: 500, fontSize: titleSize(title) + 6, lineHeight: 0.98, letterSpacing: -0.045 * (titleSize(title) + 6), color: INK, maxWidth: 1000 }, title),
        ]),
        el("div", { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", borderTop: `3px solid ${INK}`, paddingTop: 24 }, [
          {
            type: "img",
            props: { src: `data:image/svg+xml;base64,${logo}`, width: 150, height: 50 },
          },
          el("div", { display: "flex", fontFamily: "IBM Plex Mono", fontSize: 22, color: "#F389A3", backgroundColor: "#1E1E1E", padding: "4px 12px 6px" }, "(kyde.com)"),
        ]),
      ],
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: "Schibsted Grotesk", data: grotesk, weight: 500, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );

  // Flattened and stripped of alpha for the same reason the fallback card is:
  // these crawlers handle transparent PNGs inconsistently, and nothing here
  // needs transparency.
  const png = await sharp(Buffer.from(svg))
    .flatten({ background: BG })
    .removeAlpha()
    .png({ compressionLevel: 9 })
    .toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};
