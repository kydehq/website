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
// That is why two extra font packages are dev dependencies.
export const prerender = true;

const FONTS = "node_modules/@fontsource";
const inter = (weight: number) => readFileSync(`${FONTS}/inter/files/inter-latin-${weight}-normal.woff`);
const mono = readFileSync(`${FONTS}/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff`);

// The mark itself, not a re-creation of it in a similar typeface.
const logo = readFileSync("public/kyde-logo.svg").toString("base64");

const W = 1200;
const H = 630;
const BG = "#050505";
const INK = "#F2F2F2";

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
        el("div", { display: "flex", fontFamily: "JetBrains Mono", fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,242,242,0.45)" }, kind),
        el("div", { display: "flex", fontFamily: "Inter", fontWeight: 700, fontSize: titleSize(title), lineHeight: 1.12, letterSpacing: "-0.02em", color: INK, maxWidth: 1000 }, title),
        el("div", { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }, [
          {
            type: "img",
            props: { src: `data:image/svg+xml;base64,${logo}`, width: 198, height: 66 },
          },
          el("div", { display: "flex", fontFamily: "JetBrains Mono", fontSize: 22, letterSpacing: "0.14em", color: "rgba(242,242,242,0.4)" }, "kyde.com"),
        ]),
      ],
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: "Inter", data: inter(400), weight: 400, style: "normal" },
        { name: "Inter", data: inter(700), weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
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
