import { pageConfig } from "../content/page/page.config";

export default function Proof() {
  const proof = pageConfig.proof;

  if (!proof?.enabled) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12">
        {proof.headline}
      </h2>

      {Array.isArray(proof.items) && proof.items.length > 0 && (
        <div className="grid md:grid-cols-3 gap-8">
          {proof.items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}