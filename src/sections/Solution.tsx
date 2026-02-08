import { pageConfig } from "../content/page/page.config";

export default function Solution() {
  if (!pageConfig.solution?.enabled) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12">
        {pageConfig.solution.headline}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {pageConfig.solution.steps.map((step) => (
          <div key={step.title} className="border p-6 rounded-xl">
            <h3 className="font-medium mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}