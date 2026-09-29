// Site switches, flipped in code, not in the UI.
//
// SERVICES: the build service (/services, /audit, the workers on
// /use-cases). Switched off on 2026-09-29 for four weeks, until the
// Mittelstandstag. While false: no nav, footer or in-page links to it, the
// pages stay reachable at their URLs for anyone holding a link, marked
// noindex and left out of the sitemap. Set to true to bring it all back.
export const SERVICES = false;

// Where the old "Start your audit" buttons point while services are off.
export const AUDIT_CTA = SERVICES
  ? { href: '/audit', label: 'Start your audit →' }
  : { href: '/#start', label: 'How to start →' };
