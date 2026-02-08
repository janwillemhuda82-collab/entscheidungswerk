import { Helmet } from "react-helmet-async";
import { pageConfig } from "./content/page/page.config";

import Landingpage from "./pages/Landingpage";

export default function App() {
  return (
    <>
      {/* Globales Meta / SEO */}
      <Helmet>
        <title>{pageConfig.meta.title}</title>
        <meta
          name="description"
          content={pageConfig.meta.description}
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* App Root – rendert genau EINE Landingpage */}
      <Landingpage />
    </>
  );
}