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
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Beim Besuch der Website werden automatisch technische Daten erfasst (z. B.
              Internetbrowser, Betriebssystem, Referrer-URL, Uhrzeit des Seitenaufrufs). Die
              Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p>
              Wir verwenden auf dieser Website keine eigenen Cookies zu Analyse- oder
              Werbezwecken. Beim reinen Aufruf der Seite werden keine Tracking-Cookies gesetzt.
            </p>

            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
              der Website zu gewährleisten. Andere Daten werden nicht zur Analyse Ihres Nutzerverhaltens verwendet.
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

            <h3 className="font-medium">Server-Logfiles</h3>
            <p>
              Der Hosting-Anbieter erhebt und speichert bei jedem Aufruf der Website automatisch
              Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt.
              Das können insbesondere IP-Adresse (ggf. gekürzt), Datum und Uhrzeit der Anfrage,
              aufgerufene Seite/Datei, Referrer-URL, Browsertyp/-version, Betriebssystem sowie der
              verwendete Access-Provider sein. Diese Daten sind technisch erforderlich, um die Website
              auszuliefern, die Stabilität und Sicherheit zu gewährleisten (z.&nbsp;B. zur Abwehr von
              Missbrauch/Angriffen) und Fehler zu analysieren.
            </p>
            <p>
              <strong>Rechtsgrundlage</strong>
              <br />
              Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren
              und fehlerfreien Bereitstellung der Website (Art.&nbsp;6&nbsp;Abs.&nbsp;1&nbsp;lit.&nbsp;f
              DSGVO).
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

            <p>
              <strong>Datenübermittlung in Drittländer</strong>
              <br />
              Da unser Hosting-Anbieter seinen Sitz in den USA hat, kann eine Verarbeitung bzw.
              Übermittlung personenbezogener Daten in ein Drittland (USA) nicht ausgeschlossen werden.
              Wir stützen solche Übermittlungen – soweit erforderlich – auf geeignete Garantien
              (z.&nbsp;B. Standardvertragsklauseln) und/oder anwendbare Angemessenheitsbeschlüsse.
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

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">4. Ihre Rechte</h2>

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
              5. SSL- bzw. TLS-Verschlüsselung
            </h2>

            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              an dem Schloss-Symbol in der Browserzeile.
            </p>
          </section>

          <p className="text-sm text-gray-500">
            Hinweis: Teile dieser Datenschutzerklärung basieren auf Textbausteinen (u.&nbsp;a.
            e-recht24.de).
          </p>

        </div>
      </main>
    </>
  );
}