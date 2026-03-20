import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    navigate(`/states?state=${code}`);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        {/* Animated organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full bg-accent/10 blur-2xl animate-[pulse_10s_ease-in-out_infinite_1s]" />
          <div className="absolute -bottom-20 right-1/4 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-2xl animate-[pulse_12s_ease-in-out_infinite_2s]" />
          {/* Leaf-like svg pattern */}
          <svg className="absolute top-10 left-10 opacity-[0.06] w-64 h-64" viewBox="0 0 200 200">
            <path d="M100,10 Q140,50 130,100 Q120,150 100,190 Q80,150 70,100 Q60,50 100,10Z" fill="currentColor" className="text-primary-foreground" />
          </svg>
          <svg className="absolute bottom-10 right-16 opacity-[0.04] w-48 h-48 rotate-45" viewBox="0 0 200 200">
            <path d="M100,10 Q140,50 130,100 Q120,150 100,190 Q80,150 70,100 Q60,50 100,10Z" fill="currentColor" className="text-primary-foreground" />
          </svg>
          {/* Gradient mesh overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/30" />
        </div>

        <div className="container relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
          >
            Find Sustainability Programs <br className="hidden sm:block" /> Near You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            RISE helps you discover energy rebates, water incentives, transportation programs, and recycling initiatives — all in plain language.
          </motion.p>

          {/* Search / select state dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto"
            ref={dropdownRef}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Search for your state or territory..."
                className="w-full rounded-xl border-0 bg-card py-3.5 pl-11 pr-4 text-sm shadow-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 max-h-64 overflow-y-auto rounded-xl border bg-card shadow-xl z-50">
                  {filtered.length > 0 ? (
                    filtered.map((s) => (
                      <button
                        key={s.code}
                        onClick={() => handleSelectState(s.code)}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        <span>{s.name}</span>
                        <ArrowRight size={14} className="text-muted-foreground" />
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm text-muted-foreground">No matching states found.</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse by Federal */}
      <section className="container py-16">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Browse Federal Programs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => navigate(`/federal?category=${cat.key}`)}
              className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-medium text-card-foreground">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Why RISE */}
      <section className="bg-muted py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Why RISE?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Information about sustainability programs is often scattered across agencies, written in technical jargon, and hard to navigate. RISE compiles these programs into one clear, searchable platform — so every household can find and access the help they're entitled to, regardless of technical literacy or location.
          </p>
        </div>
      </section>
    </>
  );
}
