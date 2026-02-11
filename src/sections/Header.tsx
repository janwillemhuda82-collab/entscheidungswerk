import { useState } from "react";
import { pageConfig } from "../content/page/page.config";

export default function Header() {
  const header = pageConfig.header;
  const [open, setOpen] = useState(false);

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
        <div className="flex items-center justify-between h-18">
          
          {/* SYSTEMNAME */}
          <a
            href="/"
            className="text-sm font-medium"
            style={{ color: "var(--text-main)" }}
          >
            {header.system.title}
          </a>

          {/* DESKTOP NAV */}
          {header.navigation?.enabled && (
            <nav className="hidden md:block">
              <ul
                className="flex items-center text-sm"
                style={{ gap: "3rem" }}
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

          {/* MOBILE BURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={open}
            style={{ color: "var(--text-main)" }}
          >
            {!open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line
                  x1="4"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && header.navigation?.enabled && (
          <nav className="md:hidden pb-6 pt-4">
            <ul className="flex flex-col gap-6 text-sm">
              {header.navigation.items.map((item) => {
                const isCTA = item.label === "Kontakt";

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={isCTA ? "btn-primary inline-block" : ""}
                      style={
                        isCTA
                          ? {}
                          : {
                              color: "var(--text-muted)",
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
    </header>
  );
}