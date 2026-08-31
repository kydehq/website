// Single source of truth for which pages exist in more than one language.
//
// Both directions are derived from this one table on purpose. When each page
// declares its own counterpart, the two declarations drift apart, and a
// non-reciprocal hreflang pair is simply ignored by search engines — the
// failure is silent and looks exactly like having done nothing.
//
// `sourceHash` is the visible-text hash of the English page at the time the
// German one was written. `npm run qa:i18n` recomputes it and fails when the
// English side has moved on, which turns "remember to update the translation"
// into something the build says out loud. Set it to null while a translation
// is being drafted; the check reports those separately rather than failing.

export type LocalePair = {
  /** Path without leading or trailing slash, e.g. "qualified-electronic-ledger" */
  en: string;
  /** Path without leading or trailing slash, e.g. "de/wissen/elektronisches-journal" */
  de: string;
  /** Hash of the English page's visible text when the German page was written. */
  sourceHash: string | null;
  /** Why this page earns a translation, so the list does not grow by reflex. */
  note: string;
};

// Deliberately short. Regulatory pages are anchored to legislation and barely
// move; product pages change whenever we change our minds, and every one of
// them doubles the surface that can go stale in a language we read less
// carefully. Nothing goes in here without a reason in `note`.
export const LOCALE_PAIRS: LocalePair[] = [
  {
    en: "qualified-electronic-ledger",
    de: "de/wissen/qualifiziertes-elektronisches-journal",
    sourceHash: "830e44e3fc98efc1",
    note: "Nicht übersetzt, sondern eigenständig geschrieben: die deutsche Fassung ist eine Bestandsaufnahme mit eigener Auswertung der Vertrauenslisten, die englische eine Referenz zum Rechtsakt. Der Hash steht trotzdem, weil beide Seiten dieselben Rechtsaussagen tragen und nicht auseinanderlaufen dürfen.",
  },
];

export const LOCALES = ["en", "de"] as const;
export type Locale = (typeof LOCALES)[number];

const strip = (p: string) => p.replace(/^\/+|\/+$/g, "");

/** The counterpart paths for a page, keyed by locale. Empty when it has none. */
export function alternatesFor(pathname: string): Partial<Record<Locale, string>> {
  const path = strip(pathname);
  const pair = LOCALE_PAIRS.find((p) => strip(p.en) === path || strip(p.de) === path);
  if (!pair) return {};
  return { en: `/${strip(pair.en)}`, de: `/${strip(pair.de)}` };
}

/** Locale a path belongs to, from the URL alone. */
export function localeOf(pathname: string): Locale {
  return strip(pathname).startsWith("de/") || strip(pathname) === "de" ? "de" : "en";
}
