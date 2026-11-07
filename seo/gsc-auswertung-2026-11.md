---
type: analysis
title: Search-Console-Auswertung, Aug bis Nov 2026
description: Auswertung der letzten 3 Monate Google Search Console (Web und KI-Flächen) mit Blick auf den Kurswechsel weg von Governance hin zum Kern, der Erkennung entgleister Agenten.
tags: [seo, gsc, analyse]
timestamp: 2026-11-07
---

# Search-Console-Auswertung, Aug bis Nov 2026
> Owner: Joerg · Stand: 2026-11-07
> Daten: `seo/kyde/` (Web, Suchtyp textbasiert) und `seo/kyde-2/` (KI-Flächen, nur Impressionen), jeweils letzte 3 Monate

## Zahlen

| Monat | Klicks | Impressionen Web | Impressionen KI-Flächen |
|---|---|---|---|
| Aug | 26 | 964 | 56 |
| Sep | 17 | 2.256 | 62 |
| Okt | 28 | 3.446 | 751 |
| Nov (1. bis 4.) | 2 | 478 | 88 |

Insgesamt 73 Klicks bei 7.144 Impressionen. Die Sichtbarkeit wächst, die Klicks wachsen nicht. In den KI-Flächen ist der Oktober gesprungen, dort wird fast nur die Startseite gezeigt (751 von 957).

## Befunde

**1. Governance steht auf Seite 4, nicht auf Seite 2.**
`/ai-agent-governance/` hat 2.450 Impressionen bei Position 37. Die Kernsuchen liegen bei 32 bis 48 ("ai agent governance" 42, "enterprise ai agent governance" 32). Gegen die großen Anbieter ist das ein teurer Weg nach oben. Das bestätigt den Kurswechsel: Governance-Seiten pflegen, aber nicht weiter ausbauen. Das Glossar (Position 75) ist keine echte Konkurrenz für den Guide.

**2. Drift ist das Kernthema, das am nächsten an Seite 1 liegt.**
`/behavioral-drift/` steht auf Position 12 mit 579 Impressionen. "behavioral drift" 12,7, "behavior drift" 12,4, "behavioural drift" 10,6. Das ist der größte Hebel der ganzen Site. Die Suchen mit Kaufabsicht stehen dagegen weit hinten: "agent drift detection" 74, "ai agent drift monitoring" 69, "ai agent drift detection" 69. Dafür gibt es keine passende Seite, `/behavioral-drift/` ist ein Forschungstext.

**3. Die Marke steht nur auf Position 5.**
"kyde" bringt 1.422 Impressionen, Position 5,0, Klickrate 1 %. Vor uns stehen also vier andere Ergebnisse. Dazu kommen "kyde tml" (57, Position 2), "kydetml" und "ky de". Es gibt eine Organization-Auszeichnung nur innerhalb der Artikel, nicht seitenweit, und kein `sameAs` auf LinkedIn, GitHub oder Crunchbase. "Darstellung in der Suche" ist leer, Google erkennt also keine Rich Results.

**4. Zu Rogue, Prompt Injection, Schleifen und Killswitch gibt es noch keine einzige Suche.**
Das war zu erwarten, die Seiten dazu fehlen. Die Incident-Seiten und die Kernseiten müssen das erst aufbauen.

**5. Doppelte URLs mit und ohne Schrägstrich.**
`/behavioral-drift` und `/behavioral-drift/`, außerdem `/company`, `/labs`, `/use-cases`, `/compare/kyde-vs-vanta`, `/glossary/ai-agent-trust-score` und weitere werden getrennt gezählt. Das verteilt die Signale auf zwei URLs. `astro.config.mjs` setzt kein `trailingSlash`.

**6. Nebenthemen.**
- `/qualified-electronic-ledger/` hat 661 Impressionen auf Position 8,5 und 6 Klicks. Das ist abseits vom Kern, läuft aber von allein.
- Shadow AI steht auf Position 58 bis 95. Nicht weiter verfolgen.
- `/score` ist erst seit dem 2. November online und hat noch keine Daten.

**7. USA sieht uns, klickt aber nicht.**
USA hat 3.537 Impressionen bei Position 27 und 0,3 % Klickrate. Deutschland hat 265 Impressionen und 6,4 % Klickrate, vor allem über Marke und Impressum.

## Maßnahmen, nach Hebel

1. **`/behavioral-drift/` auf Seite 1 bringen.** Titel und H1 auf "AI Agent Drift Detection" zuschneiden oder eine eigene Produktseite `/agent-drift-detection` bauen, die von der Forschungsseite verlinkt wird und auf `/score` führt. Empfehlung: eigene Seite, die Forschungsseite bleibt als Beleg.
2. **Marke absichern.** Seitenweite Organization-Auszeichnung mit `sameAs` (LinkedIn, GitHub kydehq, Crunchbase, X). Prüfen, wer vor uns auf "kyde" steht und was "kyde tml" ist.
3. **Schrägstriche vereinheitlichen.** `trailingSlash: 'always'` in Astro und 301-Weiterleitungen beim Hosting, damit jede Seite nur eine URL hat.
4. **Kernseiten bauen** wie in der Strategie besprochen: Rogue AI agents (Hauptseite), Schleifen und Kostensprung, indirekte Prompt Injection als Verhaltenssignal, deterministisch vs. LLM-as-judge. Die Incident-Seiten verlinken jeweils dorthin.
5. **Governance-Guide umleiten statt ausbauen.** Ein Abschnitt "Governance needs runtime detection", der zu Drift-Erkennung und `/score` führt.
6. **In 4 Wochen erneut messen:** Position von `/behavioral-drift/` und der neuen Drift-Seite, erste Suchen zu rogue, loop und injection, Klickrate der Marke.
