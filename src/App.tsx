import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

import { pageConfig } from "./content/page/page.config";
import Header from "./sections/Header";

import Landingpage from "./pages/Landingpage";
import System from "./pages/System";
import Gruendung from "./pages/Gruendung";
import Unternehmen from "./pages/Unternehmen";
import Wissen from "./pages/Wissen";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";
import WissenArtikel from "./pages/WissenArtikel";

export default function App() {
  return (
    <>
      <Helmet>
        <title>{pageConfig.meta.title}</title>
        <meta name="description" content={pageConfig.meta.description} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* GLOBAL HEADER */}
      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/system" element={<System />} />
        <Route path="/gruendung" element={<Gruendung />} />
        <Route path="/unternehmen" element={<Unternehmen />} />
         <Route path="/wissen" element={<Wissen />} />
  <Route path="/wissen/:slug" element={<WissenArtikel />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<Privacy />} />
        
      </Routes>
    </>
  );
}