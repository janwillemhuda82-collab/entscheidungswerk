export default function Gruendung() {
  return (
    <main className="section section-loose">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Von der Idee zur tragfähigen Gründung
        </h1>

        <p className="max-w-2xl mb-20">
          Unterschiedliche Ausgangslagen brauchen unterschiedliche Einstiege.
          Hier findest du den passenden Weg – von der ersten Idee bis zur strategischen Schärfung.
        </p>

        {/* KACHELN */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Kachel 1 */}
          <div className="card p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Alles beginnt mit einer guten Idee
              </h3>

              <p>
                Gute Ideen entstehen manchmal unter der Dusche – meistens aber dann,
                wenn man ihnen Raum und Struktur gibt.
              </p>

              <p>
                Wenn du noch keine konkrete Geschäftsidee hast oder mehrere Gedanken
                im Kopf kreisen, kannst du entweder mit mir sprechen oder selbstständig
                mit <strong>Mara</strong> arbeiten.
              </p>

              <p>
                Mara führt dich strukturiert durch einen Ideationsprozess.
                Am Ende hast du eine erste Idee und mögliche Lösungsrichtungen.
              </p>
            </div>

            <a
              href="https://chatgpt.com/g/g-696d5c5661d881918bd4fc414de99ee0-mara-ideen-entwickeln-die-tragen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Mit Mara Ideen entwickeln
            </a>
          </div>

          {/* Kachel 2 */}
          <div className="card p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Von der Idee zum Geschäftsmodell
              </h3>

              <p>
                Ideen brauchen ein System – besonders dann, wenn Zeit knapp ist.
              </p>

              <p>
                Das <strong>„Haus der Ideen“</strong> ist ein System mit zehn
                thematischen Räumen, die deine Idee challengen und weiterentwickeln.
              </p>

              <p>
                Ergebnis ist ein klares Geschäftsmodell in einer Business Model Database,
                nutzbar für Businesspläne, Ideenpapiere oder Förderanträge.
              </p>

              <p className="text-sm">
                Version 0.1 · Notion & Custom GPT Flows · Einführungspreis 99 €
              </p>
            </div>

            <a
  href="mailto:kontakt@entscheidungswerk.de?subject=Testzugang%20Haus%20der%20Ideen"
  className="btn-primary mt-8"
>
  Jetzt Testzugang anfragen
</a>
          </div>

          {/* Kachel 3 */}
          <div className="card p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Strategisch denken. Klar entscheiden.
              </h3>

              <p>
                Manchmal sind die richtigen Ideen da – aber es fehlt ein Gegenüber,
                das sie herausfordert und einordnet.
              </p>

              <p>
                Ich begleite dich als Sparringspartner bei strategischen Fragen,
                Zielklarheit und Entscheidungen unter Unsicherheit.
              </p>

              <p>
                Ohne Vorgaben. Ohne Entscheidungen abzunehmen.
                Klar, reflektiert und auf Augenhöhe.
              </p>
            </div>

            <a
  href="mailto:kontakt@entscheidungswerk.de?subject=Gesprächsanfrage%20Gründung"
  className="btn-primary mt-8"
>
  Gespräch vereinbaren
</a>
          </div>

        </div>
      </div>
    </main>
  );
}