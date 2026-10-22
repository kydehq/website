// Site switches, flipped in code, not in the UI.
//
// SERVICES: the build service (/services, /audit). Switched off on
// 2026-09-29 for four weeks, until the Mittelstandstag. The six worker
// examples that sat on /use-cases went with that page in October 2026; they
// are in git history (src/pages/use-cases.astro) for when it comes back.
// While false: no nav, footer or in-page links to it, the pages stay
// reachable at their URLs for anyone holding a link, marked noindex and
// left out of the sitemap. Set to true to bring it all back.
export const SERVICES = false;
