// src/content/wissen/articles.ts

export type WissenArticle = {
  slug: string
  title: string
  excerpt: string
  date?: string
  audience?: ("kmu" | "gruendung" | "entscheidungen")[]
  readingTime?: string
  content: string
}

export const wissenArticles: WissenArticle[] = [
  {
    slug: "digitalisierung-kmu-fallen-empfehlungen",
    title: "Digitalisierung in KMU: typische Fehler, Fallen und was wirklich hilft",
    excerpt:
      "Warum Digitalisierung in KMU selten ein Technologieproblem ist – und wie Unternehmen Klarheit gewinnen, bevor sie Zeit und Geld in Tools investieren.",
    audience: ["kmu"],
    readingTime: "7–9 min",
    content: `
# Digitalisierung in KMU: typische Fehler, Fallen und was wirklich hilft

## Warum Digitalisierung in KMU selten ein Technologieproblem ist
Viele kleine und mittlere Unternehmen wissen, dass sie sich digitalisieren müssen. Unklar bleibt jedoch, wo sie anfangen sollen und welche Maßnahmen tatsächlich Wirkung entfalten.

Die häufigste Fehlannahme: Digitalisierung wird als IT- oder Softwareprojekt verstanden. In der Praxis ist sie fast immer ein Entscheidungs- und Strukturproblem.

## Typische Fehler in KMU

### 1. Digitalisierung ohne Zielklarheit
Tools werden eingeführt, ohne zu klären:
- Welches konkrete Problem soll gelöst werden?
- Welche Entscheidung soll dadurch besser getroffen werden?
- Was soll sich im Alltag messbar verändern?

Das Ergebnis sind zusätzliche Systeme, aber keine echte Entlastung.

### 2. Lösungen vor dem eigentlichen Problem
Software, Plattformen oder Prozesse werden eingeführt, bevor klar ist, wo der eigentliche Engpass liegt.

### 3. Innovation „nebenbei“
Digitalisierung wird zusätzlich zum Tagesgeschäft betrieben – ohne Priorisierung, ohne Entscheidungslogik.

## Was stattdessen hilft
- Problemorientierung vor Toolauswahl
- Kleine, reversible Entscheidungen
- Entscheidungsrahmen statt Masterplan
- Exploration vor Investition

Digitalisierung beginnt nicht mit Software – sondern mit Klarheit darüber, was entschieden werden soll.
`.trim(),
  },

  {
    slug: "entscheidungen-unter-unsicherheit-methoden-facts",
    title:
      "Entscheidungen unter Unsicherheit treffen: Methoden, Beispiele und typische Denkfehler",
    excerpt:
      "Unsicherheit ist Normalzustand. Gute Entscheidungen entstehen nicht durch Gewissheit, sondern durch Struktur, Annahmen und Konsequenzen.",
    audience: ["entscheidungen", "kmu", "gruendung"],
    readingTime: "8–10 min",
    content: `
# Entscheidungen unter Unsicherheit treffen: Methoden, Beispiele und typische Denkfehler

## Unsicherheit ist kein Fehler im System
In Innovations-, Gründungs- und Transformationsprozessen fehlen Informationen. Das ist kein Mangel, sondern Normalzustand.

Probleme entstehen, wenn dennoch Eindeutigkeit simuliert wird.

## Warum Bauchgefühl allein nicht ausreicht
Intuition ist wertvoll, aber selten:
- transparent
- anschlussfähig
- nachvollziehbar

Gerade in Organisationen braucht es Entscheidungslogiken, die erklärbar sind.

## Warum Methoden helfen (z. B. FACTS)
Methoden sind kein Selbstzweck. Sie helfen dabei:
- Annahmen sichtbar zu machen
- Optionen vergleichbar zu machen
- Konsequenzen zu durchdenken

Wichtig: Methoden ersetzen keine Entscheidung – sie bereiten sie vor.
`.trim(),
  },

  {
    slug: "von-der-idee-zur-gruendung",
    title: "Von der Idee zur Gründung: welche Schritte wirklich entscheidend sind",
    excerpt:
      "Warum gute Ideen allein nicht reichen – und wie Gründer:innen Struktur schaffen, bevor Zeit und Geld verloren gehen.",
    audience: ["gruendung"],
    readingTime: "7–9 min",
    content: `
# Von der Idee zur Gründung: welche Schritte wirklich entscheidend sind

## Ideen sind Ausgangspunkte – keine Geschäftsmodelle
Viele Gründungen scheitern nicht an der Idee, sondern an fehlender Struktur zwischen Idee und Umsetzung.

Eine Idee beantwortet selten:
- Wer zahlt?
- Wofür genau?
- Warum jetzt?
- Warum von euch?

## Typische Denkfehler in frühen Phasen
Der Markt reagiert – er erklärt nicht.
`.trim(),
  },

  {
    slug: "business-modelling-warum-so-wichtig",
    title:
      "Business Modelling einfach erklärt: warum es für Gründung und KMU unverzichtbar ist",
    excerpt:
      "Business Modelling macht Abhängigkeiten sichtbar – und verhindert teure Fehlentscheidungen in frühen Phasen.",
    audience: ["gruendung", "kmu"],
    readingTime: "8–10 min",
    content: `
# Business Modelling einfach erklärt: warum es für Gründung und KMU unverzichtbar ist

## Ein Geschäftsmodell ist kein Businessplan
Businesspläne beschreiben Erwartungen. Business Modelling zeigt Zusammenhänge und Abhängigkeiten.
`.trim(),
  },

  {
    slug: "problem-solution-fit-echte-probleme",
    title:
      "Problem–Solution-Fit verstehen: warum echte Probleme wichtiger sind als perfekte Lösungen",
    excerpt:
      "Viele Teams optimieren Lösungen, bevor klar ist, ob das Problem relevant ist.",
    audience: ["gruendung", "kmu", "entscheidungen"],
    readingTime: "7–9 min",
    content: `
# Problem–Solution-Fit verstehen: warum echte Probleme wichtiger sind als perfekte Lösungen
`.trim(),
  },

  {
    slug: "ki-im-unternehmensalltag-orientierung-kmu",
    title:
      "KI im Unternehmensalltag: Orientierung für KMU zwischen Effizienz, Entlastung und Verantwortung",
    excerpt:
      "Wie KMU KI sinnvoll einsetzen können – praxisnah, ohne Hype und ohne Arbeitsplätze zu gefährden.",
    audience: ["kmu"],
    readingTime: "9–11 min",
    content: `
# KI im Unternehmensalltag: Orientierung für KMU zwischen Effizienz, Entlastung und Verantwortung
`.trim(),
  },

  {
    slug: "ki-use-cases-kmu-checkliste",
    title:
      "KI-Use-Cases für KMU: eine praxisnahe Checkliste für den Einstieg",
    excerpt:
      "Konkrete KI-Anwendungsfälle für Vertrieb, Service und Organisation.",
    audience: ["kmu"],
    readingTime: "6–8 min",
    content: `
# KI-Use-Cases für KMU: eine praxisnahe Checkliste für den Einstieg
`.trim(),
  },

  {
    slug: "landingpages-fuer-startups-gruendung",
    title:
      "Landingpages für Start-ups und Gründung: warum sie entscheidend sind – und wie man sie richtig aufbaut",
    excerpt:
      "Eine gute Landingpage ist kein Designprojekt, sondern ein Entscheidungsinstrument. Warum sie für Start-ups entscheidend ist – und welche Fehler du vermeiden solltest.",
    audience: ["gruendung"],
    readingTime: "8–10 min",
    content: `
# Landingpages für Start-ups und Gründung: warum sie entscheidend sind – und wie man sie richtig aufbaut

## Warum Landingpages für Start-ups so wichtig sind
In frühen Phasen entscheidet nicht Perfektion, sondern Verständlichkeit.
Eine Landingpage ist oft der erste Moment, in dem Außenstehende dein Angebot einordnen müssen.

Wenn das nicht gelingt, ist nicht das Marketing schlecht – sondern die Struktur.

## Die häufigsten Fehler von Start-ups

### 1. Zu viel erklären
Viele Landingpages versuchen, alles zu sagen – und sagen damit nichts klar.

### 2. Lösung vor Problem
Features werden erklärt, bevor klar ist, welches Problem eigentlich gelöst wird.

### 3. Keine klare Zielhandlung
Der Besucher weiß nicht:
- Was soll ich hier tun?
- Für wen ist das?
- Was passiert als Nächstes?

## Was eine gute Landingpage leisten muss
Eine gute Landingpage:
- adressiert ein klares Problem
- macht das Nutzenversprechen verständlich
- reduziert Entscheidungskomplexität
- führt zu einer klaren nächsten Handlung

## Eine bewährte Grundstruktur
1. Klarer Einstieg (Problem oder Zielzustand)
2. Einordnung für die Zielgruppe
3. Lösung & Nutzen (nicht Features)
4. Vertrauen & Kontext
5. Klare, ruhige Call-to-Action

## Landingpages sind Denkwerkzeuge
Eine gute Landingpage zwingt dazu, Entscheidungen zu treffen:
- Was ist wirklich relevant?
- Für wen genau?
- Was lassen wir bewusst weg?

In diesem Sinne sind Landingpages weniger Marketinginstrument – und mehr ein Klarheitswerkzeug.

## Weiterführend
Wenn du dich tiefer mit klaren, strukturierten Landingpages für Start-ups beschäftigen willst, findest du hier einen spezialisierten Ansatz:
https://landingpage-manufaktur.de
`.trim(),
  },
]