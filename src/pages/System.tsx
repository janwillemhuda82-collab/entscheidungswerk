import { Helmet } from "react-helmet-async";

export default function System() {
  return (
    <>
      <Helmet>
        <title>Über das System – Klarheit für Innovationen</title>
        <meta
          name="description"
          content="Ein strukturierter Denk- und Entscheidungsrahmen für Klarheit und tragfähige Entscheidungen in komplexen Situationen – entwickelt aus Praxis in Gründung, Innovation und Organisationsentwicklung."
        />
      </Helmet>

      <main>
        {/* =========================
           HERO / INTRO
           ========================= */}
        <section className="section section-loose">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">
        Ein System für Klarheit und tragfähige Entscheidungen
      </h1>

      <p className="text-lg leading-relaxed">
        Ein strukturierter Denk- und Entscheidungsrahmen,
        der hilft, komplexe Situationen zu ordnen
        und bewusste Entscheidungen vorzubereiten.
      </p>
    </div>
  </div>
</section>

        {/* =========================
           SYSTEMBESCHREIBUNG
           ========================= */}
        <section className="section section-alt">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">
              Was dieses System ist
            </h2>

            <p>
              Dieses System ist ein Denk- und Entscheidungsrahmen. Es wurde
              entwickelt, um Menschen, Teams und Organisationen dabei zu
              unterstützen, Klarheit zu gewinnen, wenn Situationen komplex,
              offen oder widersprüchlich sind.
            </p>

            <p>
              Es geht nicht darum, Entscheidungen abzunehmen oder vorzugeben.
              Sondern darum, Entscheidungen möglich zu machen – nachvollziehbar,
              bewusst und tragfähig.
            </p>

            <p>
              Der Fokus liegt dabei auf Zielklarheit statt Aktivismus, Struktur
              statt zusätzlicher Komplexität und Orientierung statt vermeintlicher
              Sicherheit.
            </p>
          </div>
        </section>

        {/* =========================
           PRINZIPIEN
           ========================= */}
        <section className="section">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12">
              Grundprinzipien
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="card p-8">
                <h3>Klarheit vor Geschwindigkeit</h3>
                <p>
                  Bevor gehandelt wird, wird verstanden. Unklare Ziele,
                  unausgesprochene Annahmen oder vermischte Ebenen sind häufig der
                  eigentliche Engpass.
                </p>
              </div>

              <div className="card p-8">
                <h3>Entscheidungen vorbereiten</h3>
                <p>
                  Das System trifft keine Entscheidungen für andere. Es schafft
                  Transparenz über Optionen, Konsequenzen und Spannungsfelder.
                </p>
              </div>

              <div className="card p-8">
                <h3>Struktur ohne Überformalisierung</h3>
                <p>
                  Es gibt einen klaren Rahmen – aber keine starre Abfolge. Der
                  Prozess passt sich dem Kontext an, nicht umgekehrt.
                </p>
              </div>

              <div className="card p-8">
                <h3>Handlungsfähigkeit in komplexen Situationen</h3>
                <p>
                  Nicht jede Entscheidung braucht vollständige Informationen.
                  Aber jede Entscheidung braucht Bewusstsein für Grenzen,
                  Abhängigkeiten und Konsequenzen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
           METHODISCHER RAHMEN
           ========================= */}
        <section className="section section-alt">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">
              Methodischer Rahmen
            </h2>

            <p>
              Das System ist methodenoffen, aber nicht beliebig. Je nach
              Fragestellung kommen unterschiedliche Werkzeuge zum Einsatz –
              Methoden sind dabei Mittel, nicht Zweck.
            </p>

            <ul className="space-y-3 text-sm">
              <li>– Entscheidungslogiken aus der Handlungstheorie</li>
              <li>– Lean Canvas und strukturierte Modellierungsansätze</li>
              <li>– Design Thinking und Rapid Prototyping</li>
              <li>– Stage-Gate-Logiken in späteren Phasen</li>
              <li>– Digitale Systeme und GPT-gestützte Reflexionsprozesse</li>
            </ul>
          </div>
        </section>

        {/* =========================
           HINTERGRUND / PERSON
           ========================= */}
        <section className="section">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
            
            {/* TEXT */}
            <div className="md:col-span-7">
              <h2 className="text-3xl font-semibold">
                Erfahrung & Kontext
              </h2>

              <p>
                Das System basiert auf jahrelanger Praxis an der Schnittstelle
                von Gründung, Innovation und Entscheidungsfindung – nicht auf
                theoretischen Modellen allein.
              </p>

              <p>
                Seit 2019 arbeite ich im Umfeld der Ruhr-Universität Bochum in
                Gründungs-, Innovations- und Transferkontexten, unter anderem in
                Start-up-Programmen, Acceleratoren und landesweiten
                Qualifizierungsinitiativen.
              </p>

              <p>
                Der Anspruch ist dabei nie Lautstärke – sondern Wirksamkeit.
              </p>
            </div>

            {/* BILD */}
            <div className="md:col-span-5">
              <img
                src="/images/system/klarraum-system.jpg"
                alt="Systemische Klarheit und Entscheidungsräume"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* =========================
           ABSCHLUSS
           ========================= */}
        <section className="section section-loose section-alt">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              Klarheit ist ein Prozess
            </h2>

            <p>
              Klarheit ist kein Zustand. Sie entsteht durch Struktur, Reflexion
              und bewusste Entscheidungen. Dieses System schafft dafür den
              notwendigen Raum.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}