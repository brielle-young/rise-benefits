import { useNavigate, Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import { US_STATES, CATEGORIES } from "@/data/programs";

export default function Index() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      search.length > 0
        ? US_STATES.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
        : US_STATES,
    [search]
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelectState = (code: string) => {
    setShowDropdown(false);
    setSearch("");
    const stateName = US_STATES.find((s) => s.code === code)?.name ?? code;
    navigate(`/states?state=${encodeURIComponent(stateName)}`);
  };

  return (
    <>
      <section className="home-hero container">
        <div className="hero-copy">
          <p className="eyebrow">A public directory for your household</p>
          <h1>Find Residential<br className="hidden sm:block" /> Incentives and<br className="hidden sm:block" /> Rebates Today</h1>
          <p className="hero-description">RISE makes it easy to find energy rebates, water incentives, transportation programs, and recycling initiatives in your state and nationwide.</p>
        </div>
        <div className="state-search" ref={dropdownRef}>
          <span className="index-number" aria-hidden="true">Start here</span>
          <h2>What’s available<br />where you live?</h2>
          <label htmlFor="state-search" className="block text-sm font-semibold mb-3">Your state or territory</label>
          <div className="relative">
            <Search className="absolute left-4 top-4 text-primary" size={18} aria-hidden="true" />
            <input id="state-search" type="search" value={search}
              onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
              onFocus={() => setShowDropdown(true)}
              onKeyDown={(e) => { if (e.key === "Escape") setShowDropdown(false); if (e.key === "Enter" && filtered.length > 0) { e.preventDefault(); handleSelectState(filtered[0].code); } if (e.key === "ArrowDown") { e.preventDefault(); setShowDropdown(true); requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLButtonElement>(".state-options button")?.focus()); } }}
              aria-expanded={showDropdown} aria-controls="state-options"
              placeholder="Search your state or territory"
              className="w-full rounded-md border bg-card py-3.5 pl-11 pr-4 text-sm" />
            {showDropdown && <div id="state-options" className="state-options absolute top-full left-0 right-0 max-h-64 overflow-y-auto border bg-card z-30">
              {filtered.length > 0 ? filtered.map((s) => <button key={s.code} onClick={() => handleSelectState(s.code)} className="w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-muted"><span>{s.name}</span><ArrowRight size={14} aria-hidden="true" /></button>) : <p className="p-4 text-sm">No matching states found.</p>}
            </div>}
          </div>
          <Link to="/states" className="text-link mt-5 inline-flex">Browse all state programs <ArrowRight size={16} aria-hidden="true" /></Link>
          <div className="search-local"><Link to="/local" className="text-link">Looking for local resources? Start here →</Link></div>
        </div>
      </section>
      <section className="federal-index container">
        <div><p className="eyebrow">Across the country</p><h2>Browse Federal Programs</h2></div>
        <div className="category-index">{CATEGORIES.map((cat, i) => <Link key={cat.key} to={`/federal?category=${cat.key}`}><span className="index-number">0{i + 1}</span><span>{cat.label}</span><ArrowRight size={20} aria-hidden="true" /></Link>)}</div>
      </section>
      <section className="why-section"><div className="container why-layout"><div><p className="eyebrow">Information you can use</p><h2>Why RISE?</h2></div><p>Saving money shouldn't be complicated. Right now, information about rebates and incentives is scattered across dozens of government websites and buried in technical language. RISE organizes information by state and category so you can quickly see what is available, whether you qualify, and how to apply, with no policy expertise required.</p></div></section>
    </>
  );
}
