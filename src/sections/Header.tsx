import { pageConfig } from "../content/page/page.config";

export default function Header() {
  const header = pageConfig.header;

  if (!header?.enabled) return null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "var(--bg-main)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="flex items-center justify-between"
          style={{ height: "4.5rem" }}
        >
          {/* SYSTEMNAME */}
          <a
  href="/"
  className="text-sm font-medium"
  style={{ color: "var(--text-main)" }}
>
  {header.system.title}
</a>

          {/* NAVIGATION */}
          {header.navigation?.enabled && (
            <nav>
              <ul
                className="flex items-center text-sm"
                style={{ gap: "3.5rem" }}
              >
                {header.navigation.items.map((item) => {
                  const isCTA = item.label === "Kontakt";

                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={isCTA ? "btn-primary" : ""}
                        style={
                          isCTA
                            ? {}
                            : {
                                color: "var(--text-muted)",
                                padding: "0.25rem 0",
                              }
                        }
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}