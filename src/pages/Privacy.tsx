// src/pages/Privacy.tsx

import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung – Entscheidungswerk</title>
      </Helmet>

      <main className="section">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          
          <h1 className="text-3xl font-semibold">
            Datenschutzerklärung
          </h1>

          {/* =========================
              1. Datenschutz auf einen Blick
              ========================= */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="font-medium">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="font-medium">
              Datenerfassung auf dieser Website
            </h3>

            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Verantwortliche Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>

            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>

            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
              der Website zu gewährleisten. Andere Daten können zur Analyse
              Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>

          {/* =========================
              2. Hosting
              ========================= */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              2. Hosting
            </h2>

            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert.
            </p>

            <p>
              <strong>Hosting-Anbieter:</strong>
              <br />
              Vercel Inc.<br />
              440 N. Barranca Ave #4133<br />
              Covina, CA 91723<br />
              USA
            </p>

            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung
              des oben genannten Dienstes geschlossen.
            </p>
          </section>

          {/* =========================
              3. Verantwortliche Stelle
              ========================= */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              3. Verantwortliche Stelle
            </h2>

            <p>
              Janwillem Huda<br />
              Wielandstraße 82A<br />
              44791 Bochum<br />
              Telefon: 0234 7949927<br />
              E-Mail:{" "}
              <a
                href="mailto:kontakt@entscheidungswerk.de"
                className="underline"
              >
                kontakt@entscheidungswerk.de
              </a>
            </p>
          </section>

          {/* =========================
              Ihre Rechte
              ========================= */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              Ihre Rechte
            </h2>

            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung sowie das Recht auf
              Datenübertragbarkeit Ihrer personenbezogenen Daten.
            </p>

            <p>
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
          </section>

          {/* =========================
              SSL / TLS
              ========================= */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              SSL- bzw. TLS-Verschlüsselung
            </h2>

            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              an dem Schloss-Symbol in der Browserzeile.
            </p>
          </section>

          <p className="text-sm text-gray-500">
            Quelle: e-recht24.de
          </p>

        </div>
      </main>
    </>
  );
}