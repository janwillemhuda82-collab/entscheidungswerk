import { pageConfig } from "../content/page/page.config";

export default function Hero() {
  const hero = pageConfig.hero;

  if (!hero?.enabled) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <h1 className="text-4xl font-semibold mb-6">
        {hero.headline}
      </h1>

      {hero.subline && (
        <p className="text-gray-600 mb-8">
          {hero.subline}
        </p>
      )}

      {hero.cta?.text && hero.cta?.link && (
        <a
          href={hero.cta.link}
          className="inline-block rounded-full bg-black text-white px-8 py-3"
        >
          {hero.cta.text}
        </a>
      )}
    </div>
  );
}