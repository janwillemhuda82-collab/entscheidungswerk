import { pageConfig } from "../content/page/page.config";

export default function Solution() {
  const solution = pageConfig.solution;

  if (!solution?.enabled) return null;

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADLINE */}
        <h2 className="text-3xl font-semibold mb-16 text-center">
          {solution.headline}
        </h2>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-12">
          {solution.steps.map((step, index) => (
            <div
              key={step.title}
              className="card p-10"
            >
              {/* Schritt-Index – ruhig, systemisch */}
              <div
                className="text-sm font-medium mb-4"
                style={{ color: "var(--accent-muted)" }}
              >
                Schritt {index + 1}
              </div>

              <h3 className="text-xl font-medium mb-4">
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}