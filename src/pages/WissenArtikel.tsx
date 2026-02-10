// src/pages/WissenArtikel.tsx
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import { wissenArticles } from "../content/wissen/articles"

// Minimaler Markdown-Renderer: Absätze + Überschriften.
// (Einfach, stabil, ohne neue Dependencies.)
function renderMarkdown(md: string) {
  const lines = md.split("\n")
  return lines.map((line, i) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold mt-10 mb-3">
          {line.replace("### ", "")}
        </h3>
      )
    }
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-semibold mt-12 mb-4">
          {line.replace("## ", "")}
        </h2>
      )
    }
    if (line.startsWith("# ")) {
      return (
        <h1 key={i} className="text-3xl md:text-4xl font-semibold mb-6">
          {line.replace("# ", "")}
        </h1>
      )
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-5 list-disc">
          {line.replace("- ", "")}
        </li>
      )
    }
    if (line.trim() === "") return <div key={i} className="h-3" />
    return (
      <p key={i} className="text-gray-700 leading-relaxed">
        {line}
      </p>
    )
  })
}

export default function WissenArtikel() {
  const { slug } = useParams()
  const article = wissenArticles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <main className="section section-loose">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-semibold mb-6">Artikel nicht gefunden</h1>
          <a href="/wissen" className="underline">
            Zur Übersicht →
          </a>
        </div>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} – Entscheidungswerk</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://entscheidungswerk.de/wissen/${article.slug}`} />
      </Helmet>

      <main className="section section-loose">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <a href="/wissen" className="text-sm underline">
              ← Zurück zur Übersicht
            </a>
          </div>

          <article className="prose max-w-none">
            <div className="space-y-2 mb-10">
              {article.readingTime && (
                <p className="text-sm text-gray-500">{article.readingTime}</p>
              )}
            </div>

            <div>{renderMarkdown(article.content)}</div>

            <div id="contact" className="mt-16">
              <div className="card p-10">
                <h2 className="text-xl font-semibold mb-3">
                  Nächster Schritt
                </h2>
                <p className="text-gray-700 mb-6">
                  Wenn du eine Situation strukturieren willst (Gründung oder KMU),
                  schreib mir kurz, worum es geht – ich antworte mit einem passenden Einstieg.
                </p>
                <a
                  className="btn-primary"
                  href="mailto:kontakt@entscheidungswerk.de?subject=Anfrage%20aus%20Wissensartikel"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}