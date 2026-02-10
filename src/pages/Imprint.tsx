// src/pages/Imprint.tsx

import { Helmet } from "react-helmet-async";

export default function Imprint() {
  return (
    <>
      <Helmet>
        <title>Impressum – Entscheidungswerk</title>
      </Helmet>

      <main className="section">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          
          <h1 className="text-3xl font-semibold">
            Impressum
          </h1>

          <section className="space-y-2">
            <p className="font-medium">Entscheidungswerk</p>
            <p>
              Janwillem Huda<br />
              Kleinunternehmer<br />
              Wielandstraße 82A<br />
              44791 Bochum<br />
              Deutschland
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              Kontakt
            </h2>
            <p>
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

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              Wirtschaftsidentifikationsnummer
            </h2>
            <p>DE441149571</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
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