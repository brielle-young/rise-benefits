import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import riseLogo from "@/assets/rise-logo.svg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/states", label: "State Programs" },
  { to: "/federal", label: "Federal Programs" },
  { to: "/local", label: "Local Programs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header border-b">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={riseLogo} alt="RISE logo" className="h-16 w-auto" />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? "page" : undefined}
              className={`nav-link py-2 text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "text-primary nav-active"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open} aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t bg-card px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                pathname === l.to
                  ? "text-primary nav-active"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
