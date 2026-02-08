import { pageConfig } from "../content/page/page.config";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Proof from "../sections/Proof";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

export default function Landingpage() {
  return (
    <main>
      {/* HEADER */}
      {pageConfig.header?.enabled && <Header />}

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

      {/* PRICING (optional) */}
      {pageConfig.pricing?.enabled && (
        <section id="pricing">
          <Pricing />
        </section>
      )}

      {/* CTA */}
      {pageConfig.cta?.enabled && (
        <section id="cta">
          <CTA />
        </section>
      )}

      {/* FOOTER / RECHT */}
      {pageConfig.footer?.enabled && <Footer />}
    </main>
  );
}