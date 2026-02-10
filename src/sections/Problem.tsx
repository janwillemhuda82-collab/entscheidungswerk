import { pageConfig } from "../content/page/page.config";

export default function Problem() {
  const problem = pageConfig.problem;

  if (!problem?.enabled) return null;

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        
        {/* TEXT */}
        <div className="md:col-span-6">
          <h2 className="text-3xl font-semibold mb-8">
            {problem.headline}
          </h2>

          <ul className="space-y-4">
            {problem.points.map((point) => (
              <li key={point} className="text-base">
                – {point}
              </li>
            ))}
          </ul>
        </div>

        {/* BILD */}
        <div className="md:col-span-6">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598891324044-3f4b30b0d55c?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* leichte Beruhigung / Entsättigung */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(250,250,248,0.15), rgba(250,250,248,0.35))",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}