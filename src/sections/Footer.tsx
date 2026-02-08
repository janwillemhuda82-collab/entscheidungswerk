import { pageConfig } from "../content/page/page.config";

export default function Footer() {
  const footer = pageConfig.footer;

  if (!footer?.enabled) return null;

  return (
    <footer className="border-t border-gray-200 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-600 space-y-6">

        {/* SYSTEM FOOTER */}
        {footer.system?.text && (
          <p>{footer.system.text}</p>
        )}

        {/* PROJECT FOOTER */}
        {(footer.project?.showImprint || footer.project?.showPrivacy) && (
          <div className="flex gap-4">
            {footer.project.showImprint && (
              <a href="/impressum" className="hover:underline">
                Impressum
              </a>
            )}

            {footer.project.showPrivacy && (
              <a href="/datenschutz" className="hover:underline">
                Datenschutz
              </a>
            )}
          </div>
        )}

      </div>
    </footer>
  );
}