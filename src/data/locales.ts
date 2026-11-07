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
    en: "behavioral-drift",
    de: "de/wissen/behavioral-drift",
    sourceHash: "efaad687807a347d",
    note: "Dieselbe Argumentation in zwei Sprachen, nicht zwei eigenständige Texte: die Befunde sind dieselben und jede Zahl ist gegen dieselbe Arbeit geprüft. Übersetzt wird sie, weil sie an Forschung und an Artikel 72 hängt statt an unserem Produkt, also selten veraltet, und weil KI-MIG und BaFin deutsches Publikum sind.",
  },
  {
    en: "qualified-electronic-ledger",
    de: "de/wissen/qualifiziertes-elektronisches-journal",
    sourceHash: "ccac918c5aa4395b",
    note: "Nicht übersetzt, sondern eigenständig geschrieben: die deutsche Fassung ist eine Bestandsaufnahme mit eigener Auswertung der Vertrauenslisten, die englische eine Referenz zum Rechtsakt. Der Hash steht trotzdem, weil beide Seiten dieselben Rechtsaussagen tragen und nicht auseinanderlaufen dürfen.",
  },
  {
    en: "blog/genai-semantic-conventions-drift",
    de: "de/wissen/opentelemetry-genai-konventionen",
    sourceHash: "122d98d77dfa632d",
    note: "Gekürzte Übertragung derselben Argumentation. Sie hängt an einer offenen Spezifikation statt an unserem Produkt, und deutsche Plattform- und Observability-Teams suchen auf Deutsch danach.",
  },
  {
    en: "blog/nist-critical-infrastructure-ai-convergence",
    de: "de/wissen/ki-agenten-kritische-infrastruktur",
    sourceHash: "a1160ccafd5c6345",
    note: "Gekürzte Übertragung. Verankert in NIST, AI Act und NIS-2, bewegt sich also selten, und KRITIS-Betreiber in Deutschland sind direktes Publikum.",
  },
  {
    en: "blog/drcf-agentic-ai-foresight",
    de: "de/wissen/drcf-agentic-ai",
    sourceHash: "488cf627d6a0da90",
    note: "Gekürzte Übertragung. Das DRCF-Papier ist britisch, wird aber in deutschen Compliance-Teams gelesen. Die Seite sagt offen, dass wir es über Kanzleizusammenfassungen kennen.",
  },
  {
    en: "blog/agent-goal-hijacking",
    de: "de/wissen/agent-goal-hijacking",
    sourceHash: "21825732f3e08bd2",
    note: "Gekürzte Übertragung. Hängt an OWASP ASI01 statt an unserem Produkt, und der englische Fachbegriff wird auch auf Deutsch gesucht.",
  },
  {
    en: "ai-agent-insurance",
    de: "de/wissen/ki-agenten-versicherung",
    sourceHash: "907b94b43ddff176",
    note: "Gekürzte Übertragung als Fließtext, ohne die interaktiven Teile. Trägt Rechtsaussagen zu Produkthaftungsrichtlinie und DORA, die in beiden Sprachen gleich bleiben müssen, deshalb der Hash.",
  },
  {
    en: "ai-agent-governance",
    de: "de/wissen/ki-agenten-governance",
    sourceHash: "97b772304684f5bd",
    note: "Gekürzte Übertragung als Fließtext. Leitfaden zu AI Act, DORA, DRCF und NIST, für deutsche Banken, Versicherer und KRITIS-Betreiber geschrieben.",
  },
  {
    en: "blog/confidence-infrastructure-part-2",
    de: "de/wissen/haftung-ki-agenten",
    sourceHash: "f2484889bf04eab6",
    note: "Übertragung des Essays zu Haftung und Nachweis. Die Produkthaftungsrichtlinie wird bis Dezember 2026 in deutsches Recht umgesetzt, das Thema wird also auf Deutsch gesucht.",
  },
  {
    en: "agent-prompt-injection-detection",
    de: "de/wissen/prompt-injection-erkennen",
    sourceHash: "6b6bbf3548cf43a5",
    note: "Kernseite in der Sprache des Problems (SEO-Plan 07.11.2026). Hängt an OWASP und an der Erkennungslogik von Kyde Score, beides in beiden Sprachen gleich, deshalb der Hash.",
  },
  {
    en: "agent-loop-detection",
    de: "de/wissen/agent-endlosschleife-erkennen",
    sourceHash: "1aa4349862206270",
    note: "Kernseite in der Sprache des Problems (SEO-Plan 07.11.2026). Nennt die Schwellen aus dem Code von Kyde Score (3 und 10 Aufrufe), die in beiden Sprachen gleich bleiben müssen.",
  },
  {
    en: "rogue-ai-agents",
    de: "de/wissen/rogue-ai-agents-erkennen",
    sourceHash: "b611c1bf7a6f9554",
    note: "Hauptseite der Problem-Seiten (SEO-Plan 07.11.2026). Verteilt auf Injection, Schleife, Drift und Kill Switch, die alle zweisprachig sind.",
  },
  {
    en: "ai-agent-kill-switch",
    de: "de/wissen/kill-switch-ki-agenten",
    sourceHash: "db98085d30feb0b2",
    note: "Für Security und Einkauf, führt zum Gateway beim Kunden. Die Funktionsaussagen sind gegen Code und Handbuch des Gateway geprüft und müssen in beiden Sprachen gleich bleiben.",
  },
  {
    en: "llm-as-judge-vs-deterministic-detectors",
    de: "de/wissen/llm-as-judge-vs-deterministische-detektoren",
    sourceHash: "1d5acd29adf19607",
    note: "Für technische Entscheider. Hängt an Forschung (Zheng et al. 2023) und an der Methode von Kyde Score, beides ändert sich selten.",
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
  // Trailing slash, because that is the URL GitHub Pages serves; without it
  // every hreflang pointed at a 301.
  const url = (p: string) => (strip(p) ? `/${strip(p)}/` : "/");
  return { en: url(pair.en), de: url(pair.de) };
}

/** Locale a path belongs to, from the URL alone. */
export function localeOf(pathname: string): Locale {
  return strip(pathname).startsWith("de/") || strip(pathname) === "de" ? "de" : "en";
}
