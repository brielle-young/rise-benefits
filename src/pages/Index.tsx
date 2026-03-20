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
      <section className="relative overflow-hidden bg-primary py-28 md:py-36">
        {/* Layered animated background */}
        <div className="absolute inset-0">
          {/* Radial gradient base */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(170_35%_40%/0.25),transparent_60%),radial-gradient(ellipse_at_80%_20%,hsl(38_70%_55%/0.15),transparent_50%),radial-gradient(ellipse_at_50%_80%,hsl(152_45%_28%/0.9),hsl(152_45%_28%))]" />
          
          {/* Floating organic blobs */}
          <div className="absolute top-[10%] left-[5%] h-[320px] w-[320px] rounded-full bg-accent/20 blur-[80px] animate-[pulse_7s_ease-in-out_infinite]" />
          <div className="absolute top-[60%] right-[8%] h-[280px] w-[280px] rounded-full bg-secondary/20 blur-[70px] animate-[pulse_9s_ease-in-out_infinite_1.5s]" />
          <div className="absolute top-[30%] right-[30%] h-[200px] w-[200px] rounded-full bg-primary-foreground/5 blur-[60px] animate-[pulse_11s_ease-in-out_infinite_3s]" />
          <div className="absolute -bottom-10 left-[40%] h-[350px] w-[350px] rounded-full bg-accent/15 blur-[90px] animate-[pulse_13s_ease-in-out_infinite_2s]" />

          {/* Diagonal lines pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>

          {/* Leaf motifs */}
          <svg className="absolute top-8 left-12 opacity-[0.07] w-56 h-56 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
            <path d="M100,10 Q145,55 130,100 Q115,150 100,190 Q85,150 70,100 Q55,55 100,10Z" fill="currentColor" className="text-primary-foreground" />
          </svg>
          <svg className="absolute bottom-8 right-20 opacity-[0.05] w-40 h-40 rotate-[70deg] animate-[spin_80s_linear_infinite_reverse]" viewBox="0 0 200 200">
            <path d="M100,10 Q145,55 130,100 Q115,150 100,190 Q85,150 70,100 Q55,55 100,10Z" fill="currentColor" className="text-primary-foreground" />
          </svg>
          <svg className="absolute top-[45%] left-[60%] opacity-[0.04] w-32 h-32 rotate-[140deg]" viewBox="0 0 200 200">
            <path d="M100,10 Q145,55 130,100 Q115,150 100,190 Q85,150 70,100 Q55,55 100,10Z" fill="currentColor" className="text-primary-foreground" />
          </svg>

          {/* Dot grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 backdrop-blur-sm"
          >
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">Your guide to sustainability incentives</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-[1.1]"
          >
            Discover Rebates, Incentives <br className="hidden sm:block" /> & Programs Near You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            RISE helps you discover energy rebates, water incentives, transportation programs, and recycling initiatives in your state and across the country.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <button
              onClick={() => navigate("/local")}
              className="text-secondary hover:text-secondary/80 underline underline-offset-4 text-sm font-medium transition-colors active:scale-[0.97]"
            >
              See instructions for local info →
            </button>
          </motion.p>

          {/* Search / select state dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md mx-auto mt-10"
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
