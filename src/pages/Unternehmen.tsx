export default function Unternehmen() {
  return (
    <main className="section section-loose">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Komplexe Entscheidungen strukturieren 
        </h1>

        <p className="max-w-2xl mb-20">
          Viele Unternehmen stehen unter Handlungsdruck – ohne klare Entscheidungsgrundlagen.
          Hier findest du unterschiedliche Einstiege, um Komplexität zu ordnen,
          Optionen sichtbar zu machen und tragfähige Entscheidungen vorzubereiten.
        </p>

        {/* KACHELN */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Kachel 1 */}
          <div className="card p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Klarheit gewinnen, bevor investiert wird
              </h3>

              <p>
                Digitalisierung, neue Geschäftsmodelle oder Innovation sind selten
                das eigentliche Problem.
              </p>

              <p>
                Schwieriger ist es, unter Unsicherheit zu entscheiden,
                wo ein Einstieg sinnvoll ist – und wo nicht.
              </p>

              <p>
                Ich unterstütze dabei, Optionen zu strukturieren,
                Abhängigkeiten sichtbar zu machen und
                einen belastbaren Entscheidungsrahmen zu entwickeln.
              </p>
            </div>

            <a
  href="mailto:kontakt@entscheidungswerk.de?subject=Gesprächsanfrage%20Unternehmen%20Orientierung"
  className="btn-primary mt-8"
>
  Orientierungsgespräch vereinbaren
</a>
          </div>

          {/* Kachel 2 */}
          <div className="card p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Neue Wege prüfen – kontrolliert und strukturiert
              </h3>

              <p>
                Wenn klar ist, dass neue Wege geprüft werden müssen,
                braucht es Struktur statt Ideenfeuerwerk.
              </p>

              <p>
                Ich begleite Unternehmen dabei, neue Geschäftsmodelle,
                Angebote oder Organisationslogiken systematisch zu explorieren –
                zeitlich begrenzt und anschlussfähig an bestehende Strukturen.
              </p>

              <p>
                Methoden aus dem Innovations- und Start-up-Kontext
                kommen dort zum Einsatz, wo sie helfen,
                Entscheidungen vorzubereiten – nicht, um Prozesse zu simulieren.
              </p>
            </div>

            <a
  href="mailto:kontakt@entscheidungswerk.de?subject=Anfrage%20Workshops%20und%20Prozesse"
  className="btn-primary mt-8"
>
  Workshops & Prozesse anfragen
</a>
          </div>

          {/* Kachel 3 */}
          <div className="card p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Übergänge und Transformationen begleiten
              </h3>

              <p>
                In Innovations-, Förder- oder Transformationsprojekten
                entsteht Unsicherheit nicht durch fehlendes Wissen,
                sondern durch Komplexität.
              </p>

              <p>
                Ich begleite Führungskräfte, Projektverantwortliche
                und Teams als Sparringspartner bei strategischen Entscheidungen,
                Richtungswechseln und Übergängen.
              </p>

              <p>
                Ohne Entscheidungen abzunehmen.
                Ohne Projektsteuerung zu ersetzen.
                Klar, reflektiert und auf Augenhöhe.
              </p>
            </div>

            <a
  href="mailto:kontakt@entscheidungswerk.de?subject=Gesprächsanfrage%20Strategisches%20Sparring"
  className="btn-primary mt-8"
>
  Strategisches Sparring anfragen
</a>
          </div>

        </div>
      </div>
    </main>
  );
}