import { useState } from "react"
import MaraModal from "./MaraModal"

export default function MaraTeaser() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="section section-loose">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Du hast noch keine Idee?
          </h2>
<p
            className="mx-auto mb-12 text-center"
            style={{ color: "var(--text-muted)" }}
          >
            Mara führt dich Schritt für Schritt durch einen klaren
            Denkprozess.<br></br>Keine Schnellschüsse. Keine Bewertung.
            Nur Struktur.
          </p>
          

          <button
            onClick={() => setIsOpen(true)}
            className="btn-primary"
          >
            Mit Mara starten
          </button>

        </div>
      </section>

      <MaraModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}