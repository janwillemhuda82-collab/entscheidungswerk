import { pageConfig } from "../content/page/page.config";

import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Proof from "../sections/Proof";
import Pricing from "../sections/Pricing";
import Footer from "../sections/Footer";
import AudienceCTA from "../sections/AudienceCTA";

export default function Landingpage() {
  return (
    <main style={{ paddingTop: "4.5rem" }}>

    

      {/* HERO */}
      {pageConfig.hero?.enabled && (
        <section id="hero">
          <Hero />
        </section>
      )}

      {/* PROBLEM */}
      {pageConfig.problem?.enabled && (
        <section id="problem">
          <Problem />
        </section>
      )}

      {/* SOLUTION */}
      {pageConfig.solution?.enabled && (
        <section id="solution">
          <Solution />
        </section>
      )}

      {/* PROOF / TRUST */}
      {pageConfig.proof?.enabled && (
        <section id="proof">
          <Proof />
        </section>
      )}

      
      {/* ZIELGRUPPEN */}
      {pageConfig.audienceCTA?.enabled && (
        <section id="audience">
          <AudienceCTA />
        </section>
      )}
    

      {/* FOOTER / RECHT */}
      {pageConfig.footer?.enabled && <Footer />}
    </main>
  );
}