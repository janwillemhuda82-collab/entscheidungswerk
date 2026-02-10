import { pageConfig } from "../content/page/page.config";

export default function Hero() {
  if (!pageConfig.hero?.enabled) return null;

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "70vh" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-12 gap-12 items-center">
        
        {/* TEXTBEREICH */}
        <div className="md:col-span-7 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {pageConfig.hero.headline}
          </h1>

          <p className="text-lg text-[var(--text-muted)] mb-10 max-w-xl">
            {pageConfig.hero.subline}
          </p>

          <a
            href={pageConfig.hero.cta.link}
            className="btn-primary"
          >
            {pageConfig.hero.cta.text}
          </a>
        </div>

        {/* BILDBEREICH */}
        <div className="md:col-span-5 absolute md:relative top-0 right-0 h-full w-full md:w-auto">
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1520529890308-f503006340b4?q=80&w=2067&auto=format&fit=crop"
              alt=""
              className="h-full w-full object-cover"
            />

            {/* FADE IN DEN CONTENT */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, var(--bg-main) 0%, var(--bg-main) 40%, rgba(250,250,248,0.85) 55%, rgba(250,250,248,0.4) 70%, rgba(250,250,248,0) 100%)",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}