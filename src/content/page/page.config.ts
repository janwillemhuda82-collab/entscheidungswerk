export const pageConfig = {
  /* =========================
     META / SEO
     ========================= */
  meta: {
    title: "Landingpage Titel",
    description: "Kurzbeschreibung der Landingpage",
  },

  /* =========================
     HEADER
     ========================= */
header: {
  enabled: true,

  system: {
    title: "Landingpage Core",
    showTitle: true,
  },

  navigation: {
    enabled: false, // ← STANDARD: aus
    items: [
      { label: "Problem", anchor: "#problem" },
      { label: "Lösung", anchor: "#solution" },
      { label: "Ablauf", anchor: "#process" },
      { label: "Tickets", anchor: "#tickets" },
    ],
  },
},

  /* =========================
     HERO
     ========================= */
  hero: {
    enabled: true,
    headline: "Deine Headline",
    subline: "Dein Subheading",
    cta: {
      text: "Jetzt starten",
      link: "#",
    },
  },

  /* =========================
     PROBLEM
     ========================= */
  problem: {
    enabled: true,
    headline: "Das Problem",
    points: [
      "Unklare Kommunikation",
      "Zu viele Botschaften",
      "Keine klare Handlung für Besucher",
    ],
  },

  /* =========================
     SOLUTION
     ========================= */
  solution: {
    enabled: true,
    headline: "Die Lösung",
    steps: [
      {
        title: "Klarheit schaffen",
        text: "Das Angebot wird verständlich und fokussiert dargestellt.",
      },
      {
        title: "Struktur aufbauen",
        text: "Besucher werden logisch durch die Seite geführt.",
      },
      {
        title: "Handlung ermöglichen",
        text: "Eine klare Call-to-Action ohne Ablenkung.",
      },
    ],
  },

  /* =========================
     PROOF / TRUST
     ========================= */
  proof: {
    enabled: true,
    headline: "Warum man euch vertrauen kann",
    items: [
      {
        title: "Erfahrung",
        text: "Relevante Expertise oder Projekterfahrung.",
      },
      {
        title: "Fakten",
        text: "Zahlen, Daten oder nachvollziehbare Argumente.",
      },
      {
        title: "Transparenz",
        text: "Klare Aussagen ohne Marketing-Floskeln.",
      },
    ],
  },

  /* =========================
     PRICING (optional)
     ========================= */
  pricing: {
    enabled: false,
    headline: "Preise",
    items: [
      {
        title: "Basic",
        price: "ab 499 €",
        features: [
          "Landingpage",
          "Kontaktmöglichkeit",
          "Deployment",
        ],
      },
      {
        title: "Pro",
        price: "ab 1.290 €",
        features: [
          "Strategie",
          "Struktur",
          "Umsetzung",
        ],
      },
    ],
  },

  /* =========================
     CTA
     ========================= */
  cta: {
    enabled: true,
    headline: "Bereit für den nächsten Schritt?",
    text: "Jetzt Kontakt aufnehmen oder Ticket sichern.",
    button: {
      text: "Jetzt handeln",
      link: "#",
    },
  },

  /* =========================
     FOOTER / RECHT
     ========================= */
  footer: {
  enabled: true,

  system: {
    text: "© 2026 Landingpage Core · Modulares Grundgerüst",
  },

  project: {
    showImprint: true,
    showPrivacy: true,
  },
},
}