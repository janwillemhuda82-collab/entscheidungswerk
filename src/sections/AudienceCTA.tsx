import { pageConfig } from "../content/page/page.config";

export default function AudienceCTA() {
  const section = pageConfig.audienceCTA;
  if (!section?.enabled) return null;

  return (
    <section className="section section-loose section-alt">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <h2 className="text-3xl font-semibold mb-24 text-center">
          {section.headline}
        </h2>

        {/* KACHELN */}
        <div className="grid md:grid-cols-2 gap-12">
          {section.items.map((item) => (
            <div
              key={item.title}
             className="card p-12 flex flex-col justify-between"
                style={{ backgroundColor: "#ffffff" }}
            >
              {/* TEXT */}
              <div>
                <h3 className="text-xl font-medium mb-6">
                  {item.title}
                </h3>

                <p className="mb-8">
                  {item.text}
                </p>

                <ul className="space-y-3 text-sm mb-12">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>– {bullet}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <a href={item.cta.link} className="btn-primary">
                  {item.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}