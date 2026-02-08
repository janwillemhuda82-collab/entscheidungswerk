import { pageConfig } from "../content/page/page.config";

export default function Header() {
  if (!pageConfig.header?.enabled) return null;

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* SYSTEM BRAND */}
        {pageConfig.header.system.showTitle && (
          <span className="font-medium text-gray-900">
            {pageConfig.header.system.title}
          </span>
        )}

        {/* PROJECT NAV */}
        {pageConfig.header.navigation.enabled && (
          <nav className="flex gap-6 text-sm">
            {pageConfig.header.navigation.items.map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="text-gray-600 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}