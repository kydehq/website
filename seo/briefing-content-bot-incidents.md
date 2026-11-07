---
type: briefing
title: Briefing Content-Bot, wöchentliche Incident-Artikel
description: Auftrag für den Content-Bot. Jede Woche einen echten Vorfall mit einem gekaperten oder entgleisten AI-Agenten recherchieren und als kurzen Artikel auf kyde.com aufbereiten.
tags: [seo, content, incidents, bot]
timestamp: 2026-11-07
---

# Briefing Content-Bot: Incident-Artikel
> Owner: Joerg · Stand: 2026-11-07
> Stimme: `01-kyde-company/04_marketing/comms-rulebook/01-voice-dna.md` §12 (Editorial-Register) und §3 (Tabu-Liste)

## Auftrag

Jede Woche ein Artikel auf Englisch über einen echten, belegten Vorfall der letzten 14 Tage: Ein AI-Agent mit Zugriff auf Werkzeuge hat etwas anderes getan als vorgesehen. Typische Fälle:

- **Gekapert:** Der Agent liest eine präparierte Webseite, Mail, Datei, ein Issue oder eine Tool-Beschreibung und handelt danach anders (indirekte Prompt Injection).
- **Entgleist:** Der Agent hängt in einer Schleife, verbrennt Geld oder ändert still sein Verhalten.
- **Ausgebrochen:** Der Agent löscht, überweist, verschickt oder veröffentlicht etwas, das er nicht sollte.

Leser sind Entwickler, die Agenten in Produktion betreiben, und Security-Leute, die dafür geradestehen.

## Recherche

1. Quellen: Vendor-Postmortems, GitHub-Issues, Security-Advisories und CVEs, Blogs von Security-Forschern, Hacker News, seriöse Tech-Presse.
2. Nur Fälle mit Primärquelle. Ein Tweet ohne Beleg reicht nicht.
3. Pro Fall festhalten: Was ist passiert, welcher Agent, welche Werkzeuge, was war der Auslöser, was war der Schaden, wann wurde es bemerkt und von wem.
4. Gibt es in der Woche keinen belegten Fall, schreibt der Bot keinen Artikel und meldet das. Kein Füllstoff.

## Aufbau des Artikels (600 bis 900 Wörter)

1. **Titel:** beschreibend, mit dem Suchbegriff. Beispiel: "How a Poisoned GitHub Issue Made a Coding Agent Leak a Private Repo". Kein Wortspiel.
2. **Was passiert ist:** sachlich, mit Datum, Produkt und Quelle.
3. **Wie der Angriff oder Fehler funktioniert hat:** Schritt für Schritt, so konkret, dass ein Entwickler es versteht.
4. **Welches Signal es verraten hätte:** Was hat sich im Verhalten des Agenten messbar geändert, bevor der Schaden da war? Zum Beispiel ein Werkzeug, das er für diese Aufgabe nie nutzt, ein neues Ziel (Domain, Repo, Empfänger), ein plötzlicher Sprung in der Zahl der Aufrufe oder eine Schleife. Wird ein Signal nur angenommen, muss der Text das sagen ("Based on the public write-up, the agent likely…").
5. **Was du heute tun kannst:** zwei bis vier konkrete Schritte, die auch ohne Kyde helfen.
6. **Ein Absatz zu Kyde**, klar getrennt vom Artikel und ohne Superlative. Siehe unten.

Am Ende stehen die Quellen als Liste, im Entwurf außerdem ein Prüfprotokoll: jede Tatsache mit Quelle.

## Was Kyde kann, und was nicht

Kyde Score (score.kyde.com) liest die OpenTelemetry-Daten eines Agenten und bewertet sein Verhalten deterministisch, ohne LLM in der Prüfschleife. Drei Detektoren laufen pro Agent:

- **Plötzlicher Bruch** (CUSUM): Das Verhalten springt abrupt.
- **Schleichende Drift** (Jensen-Shannon-Divergenz): Das Verhalten verschiebt sich langsam.
- **Aufgabenvertrag** (M3): In einer Aufgabe taucht ein neues Werkzeug oder ein neues Ziel auf, das es vorher nicht gab.

Bei einem Sprung kommt ein signierter Webhook. Der Einstieg ist kostenlos.

Der Bot schreibt das so und nicht größer:

- Kyde erkennt die **Verhaltensänderung**, die eine Prompt Injection auslöst, nicht die Injection im Text selbst. Also nie "Kyde detects prompt injection", sondern zum Beispiel "the agent calling a tool it had never used for this task is the kind of change Kyde Score flags".
- Keinen Killswitch beim Kunden erwähnen, solange Joerg den Status nicht freigegeben hat.
- Nie behaupten, Kyde hätte den Vorfall verhindert. Erlaubt ist nur, welches Signal angeschlagen hätte.

Vorlage für den Produktabsatz:

> Kyde Score works this way. It reads your agent's OpenTelemetry, builds a baseline of how the agent normally behaves, and scores every session against it. When an agent calls a tool or reaches a target it has never touched for that task, or when its behavior shifts abruptly, you get a signed webhook. Setup takes one environment variable and is free at score.kyde.com.

## Stimme: wie ein Stripe-Editor, nicht wie eine KI

Ruhig, klar, kompetent. Erst erklären, dann urteilen. Den Leser direkt ansprechen ("If you run coding agents with repo access…").

**Nicht schreiben:**
- Staccato-Fragmente ("One issue. One agent. One leak.")
- Negationspaare als Pointe ("This isn't a bug. It's a design flaw.")
- Absätze, die mit einer Pointe enden ("That's the real risk.")
- Kunstpausen-Doppelpunkt ("The answer is simple: …")
- Dramatik und Absolutes ohne Beleg: "changes everything", "every agent", "no one noticed"
- Gedankenstriche und Emojis
- Tabu-Wörter: AI safety, guardrails, AI firewall, robust, powerful, seamless, unlock, empower, game-changing, cutting-edge
- Panikmache und Häme gegenüber dem betroffenen Anbieter

**Stattdessen:**
- Absätze von 2 bis 5 Sätzen, Satzlänge natürlich gemischt
- Übergänge, die den Gedanken tragen ("That matters because…", "In practice, though…")
- Präzise Einschränkungen, wo sie stimmen ("as of November 2026", "in the default configuration")
- Ein Schluss, der zusammenfasst, keine Pointe

Prüffrage vor der Abgabe: Würde ein Editor bei Stripe diesen Absatz so durchwinken, oder würde er sagen "klingt nach Werbung" oder "klingt generiert"?

## SEO

- Ein Hauptsuchbegriff pro Artikel, im Titel, in der ersten H2 und in der URL. Beispiele: "indirect prompt injection", "AI agent infinite loop cost", "rogue AI agent", "coding agent data leak", "AI agent incident".
- Den Produkt- und Vorfallnamen nennen, nach dem Leute in der Woche suchen.
- Intern verlinken auf `/behavioral-drift`, `/score` und den passenden Glossar-Eintrag.
- Meta-Description: ein Satz, was passiert ist und was der Leser lernt.

## Ablage und Freigabe

- Entwurf als `.md` nach `02-kyde-website/seo/drafts/incident-YYYY-MM-DD-<slug>.md`, inklusive Prüfprotokoll.
- Joerg gibt frei. Ohne Freigabe geht nichts live.
