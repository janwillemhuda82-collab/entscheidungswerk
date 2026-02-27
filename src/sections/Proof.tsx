import { pageConfig } from "../content/page/page.config";

export default function Proof() {
  const proof = pageConfig.proof;

  if (!proof?.enabled) return null;

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-16 text-center">
          {proof.headline}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {proof.items.map((item) => (
            <div
              key={item.title}
              className="p-10 rounded-2xl"
              style={{
                backgroundColor: "#fafaf8",
                border: "1px solid var(--border-soft)",
              }}
            >
              <h3 className="text-xl font-medium mb-4">
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}