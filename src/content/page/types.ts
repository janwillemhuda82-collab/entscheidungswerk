// src/content/page/types.ts

export type CTAConfig =
  | {
      enabled: false;
    }
  | {
      enabled: true;
      headline?: string;
      text?: string;
      button?: {
        text: string;
        link: string;
      };
    };