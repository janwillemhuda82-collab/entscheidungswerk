// src/content/page/page.config.ts

export const pageConfig = {
  /* =========================
     META (SEO-relevant)
     ========================= */
  meta: {
    title:
      "Entscheidungswerk – Struktur für Entscheidungen, Innovation & Gründung",
    description:
      "Entscheidungswerk ist ein strukturierter Entscheidungsrahmen für Gründer:innen und KMU. Klarheit gewinnen, Optionen prüfen und tragfähige Entscheidungen in komplexen Situationen vorbereiten.",
  },

  /* =========================
     HEADER
     ========================= */
  header: {
    enabled: true,
    system: {
      title: "Entscheidungswerk",
      showTitle: true,
    },
    navigation: {
      enabled: true,
      items: [
        { label: "Über das System", href: "/system" },
        { label: "Für Gründung", href: "/gruendung" },
        { label: "Für Unternehmen", href: "/unternehmen" },
        { label: "Wissen", href: "/wissen" },
        { label: "Kontakt", href: "#contact" },
      ],
    },
  },

  /* =========================
     HERO (Message Match + SEO)
     ========================= */
  hero: {
    enabled: true,
    headline: "Klarheit für Innovationen und Entscheidungen",
    subline:
      "Ein strukturierter Entscheidungsrahmen für Gründer:innen und Unternehmen, wenn Ideen konkurrieren, Informationen unvollständig sind und Richtung gebraucht wird.",
    cta: {
      text: "Mehr über das System erfahren",
      link: "#audience",
    },
  },

  /* =========================
     PROBLEM
     ========================= */
  problem: {
    enabled: true,
    headline: "Warum gute Ideen oft nicht weiterkommen",
    points: [
      "Zu viele Ideen konkurrieren, ohne klar bewertet zu werden",
      "Entscheidungen werden vertagt oder aus dem Bauch getroffen",
      "Diskussionen drehen sich im Kreis statt Orientierung zu schaffen",
      "Es fehlt Struktur – ohne dass mehr Prozesse gewollt sind",
    ],
  },

  /* =========================
     SOLUTION
     ========================= */
  solution: {
    enabled: true,
    headline: "Ein klarer Rahmen statt weiterer Komplexität",
    steps: [
      {
        title: "Ordnung schaffen",
        text:
          "Ideen, Annahmen und Optionen werden sichtbar gemacht und in eine nachvollziehbare Struktur gebracht.",
      },
      {
        title: "Relevanz klären",
        text:
          "Was ist wirklich entscheidungsrelevant – und was ist nur Hintergrundrauschen?",
      },
      {
        title: "Entscheidungen vorbereiten",
        text:
          "Nicht durch Vorgaben, sondern durch Klarheit über Optionen, Konsequenzen und nächste Schritte.",
      },
    ],
  },

  /* =========================
     PROOF
     ========================= */
  proof: {
    enabled: true,
    headline: "Entwickelt aus Praxis – nicht aus Theorie",
    subtitle:
      "Der Entscheidungsrahmen basiert auf realen Gründungs-, Innovations- und Transformationsprozessen – dort, wo Unsicherheit zum Alltag gehört.",
    items: [
      {
        title: "Praxisnähe",
        text:
          "Erfahrung aus Start-up-Coaching, Hochschulkontexten und Innovationsprojekten mit Gründer:innen und KMU.",
      },
      {
        title: "Systemlogik",
        text:
          "Ein konsistenter Entscheidungsrahmen, der sich auf unterschiedliche Kontexte übertragen lässt – ohne jedes Mal neu zu beginnen.",
      },
      {
        title: "Reduktion statt Overhead",
        text:
          "Keine Methodenparade, keine Buzzwords – sondern Struktur, die Entscheidungsfähigkeit erhöht.",
      },
    ],
  },

  /* =========================
     AUDIENCE CTA
     ========================= */
  audienceCTA: {
    enabled: true,
    headline: "Der passende Einstieg – je nach Ausgangslage",
    items: [
      {
        title: "Gründung & frühe Ideenphase",
        text:
          "Für Gründer:innen und Teams, die eine Idee haben – oder mehrere – und daraus ein tragfähiges Geschäftsmodell entwickeln wollen.",
        bullets: [
          "Ideen strukturieren und schärfen",
          "Annahmen sichtbar und überprüfbar machen",
          "Klarheit über Richtung und nächste Schritte gewinnen",
        ],
        cta: {
          text: "Mehr zur Arbeit mit Gründungsteams",
          link: "/gruendung",
        },
      },
      {
        title: "KMU & etablierte Organisationen",
        text:
          "Für Unternehmen ohne eigene Innovationsabteilung, die unter Veränderungsdruck stehen und Entscheidungen fundiert vorbereiten müssen.",
        bullets: [
          "Optionen vergleichbar machen",
          "Entscheidungen unter Unsicherheit vorbereiten",
          "Innovation ohne Prozess-Overhead ermöglichen",
        ],
        cta: {
          text: "Mehr zur Arbeit mit Unternehmen",
          link: "/unternehmen",
        },
      },
    ],
  },

  /* =========================
     FOOTER
     ========================= */
  footer: {
    enabled: true,
    system: {
      text: "© 2026 Entscheidungswerk · Struktur für klare Entscheidungen",
    },
    project: {
      showImprint: true,
      showPrivacy: true,
    },
  },
};