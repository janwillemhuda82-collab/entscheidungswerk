import { pageConfig } from "../content/page/page.config";

export default function Pricing() {
  const pricing = pageConfig.pricing;

  if (!pricing?.enabled) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12">
        {pricing.headline}
      </h2>

      {Array.isArray(pricing.items) && pricing.items.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          {pricing.items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8"
            >
              <h3 className="text-xl font-medium mb-2">
                {item.title}
              </h3>

              <p className="font-semibold mb-4">
                {item.price}
              </p>

              {Array.isArray(item.features) && item.features.length > 0 && (
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>– {feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}