// src/types/page.ts

export type PricingItem = {
  title: string;
  price: string;
  features: string[];
};

export type PricingConfig = {
  enabled: boolean;
  headline: string;
  items: PricingItem[];
};

export type PageConfig = {
  meta: {
    title: string;
    description: string;
  };

  header: {
    enabled: boolean;
    system: {
      title: string;
      showTitle: boolean;
    };
    navigation: {
      enabled: boolean;
      items: { label: string; anchor: string }[];
    };
  };

  hero: {
    enabled: boolean;
    headline: string;
    subline: string;
    cta: {
      text: string;
      link: string;
    };
  };

  problem: {
    enabled: boolean;
    headline: string;
    points: string[];
  };

  solution: {
    enabled: boolean;
    headline: string;
    steps: {
      title: string;
      text: string;
    }[];
  };

  proof: {
    enabled: boolean;
    headline: string;
    items: {
      title: string;
      text: string;
    }[];
  };

  pricing: PricingConfig;

  audienceCTA: {
    enabled: boolean;
    headline: string;
    items: {
      title: string;
      text: string;
      bullets: string[];
      cta: {
        text: string;
        link: string;
      };
    }[];
  };

  footer: {
    enabled: boolean;
    system: {
      text: string;
    };
    project: {
      showImprint: boolean;
      showPrivacy: boolean;
    };
  };
};