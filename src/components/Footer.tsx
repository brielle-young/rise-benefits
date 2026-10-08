import { Link } from "react-router-dom";
import riseLogo from "@/assets/rise-logo.svg";

export default function Footer() {
  return (
    <footer className="site-footer border-t mt-auto">
      <div className="container py-12 grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={riseLogo} alt="RISE logo" className="h-16 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Residential Incentives for Sustainability and Environmentalism. Helping every household access tax rebates, programs, and incentives.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold mb-3 text-foreground">Navigate</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/states" className="hover:text-foreground transition-colors">State Programs</Link></li>
            <li><Link to="/federal" className="hover:text-foreground transition-colors">Federal Programs</Link></li>
            <li><Link to="/local" className="hover:text-foreground transition-colors">Local Programs</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold mb-3 text-foreground">Get in Touch</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Questions, corrections, or suggestions? Reach out to us directly.
          </p>
          <a
            href="mailto:rise_initiative@cornell.edu"
            className="text-sm font-medium text-primary hover:underline"
          >
            rise_initiative@cornell.edu
          </a>
        </div>
      </div>
      <div className="container border-t py-6 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 RISE.</span><span>Sources: official program links in each listing. Check with the provider for current availability.</span>
      </div>
    </footer>
  );
}
