// src/components/CTA.tsx
import { pageConfig } from "../content/page/page.config";

export default function CTA() {
  const cta = pageConfig.cta;

  if (!cta.enabled) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-32 text-center">
      {cta.headline && (
        <h2 className="text-3xl font-semibold mb-6">
          {cta.headline}
        </h2>
      )}

      {cta.text && (
        <p className="text-gray-600 mb-8">
          {cta.text}
        </p>
      )}

      {cta.button && (
        <a
          href={cta.button.link}
          className="inline-block rounded-full bg-black text-white px-10 py-4"
        >
          {cta.button.text}
        </a>
      )}
    </section>
  );
}