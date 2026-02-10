// src/pages/Wissen.tsx
import { Helmet } from "react-helmet-async"
import { wissenArticles } from "../content/wissen/articles"

export default function Wissen() {
  return (
    <>
      <Helmet>
        <title>Wissen – Entscheidungswerk</title>
        <meta
          name="description"
          content="Einordnungen, Denkmodelle und praxisnahe Artikel zu Entscheidungen, Gründung und Innovation – für Gründer:innen und KMU."
        />
      </Helmet>

      <main className="section section-loose">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Wissen & Einordnung
          </h1>

          <p className="max-w-2xl mb-20">
            Kurze, praxisnahe Artikel zu Entscheidungen, Gründung und Innovation.
            Nicht als „Methode von der Stange“, sondern als Orientierung für
            komplexe Situationen.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {wissenArticles.map((a) => (
              <a
                key={a.slug}
                href={`/wissen/${a.slug}`}
                className="card p-10 block"
              >
                <div className="flex items-start justify-between gap-6 mb-4">
                  <h2 className="text-xl font-medium">{a.title}</h2>
                  {a.readingTime && (
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {a.readingTime}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed">{a.excerpt}</p>

                <div className="mt-8 text-sm font-medium">
                  Weiterlesen →
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
