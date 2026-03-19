import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { US_STATES, CATEGORIES } from "@/data/programs";

export default function Index() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      search.length > 0
        ? US_STATES.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
        : US_STATES,
    [search]
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-accent" />
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

          {/* Search / select state */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for your state or territory..."
                className="w-full rounded-xl border-0 bg-card py-3.5 pl-11 pr-4 text-sm shadow-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="container py-16">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => navigate(`/federal?category=${cat.key}`)}
              className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-medium text-card-foreground">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* States Grid */}
      <section className="container pb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-2">Select Your State or Territory</h2>
        <p className="text-muted-foreground text-center mb-8">Choose a location to see available programs.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-4xl mx-auto">
          {filtered.map((s) => (
            <button
              key={s.code}
              onClick={() => navigate(`/state/${s.code}`)}
              className="flex items-center justify-between rounded-lg border bg-card px-4 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-primary hover:text-primary-foreground group"
            >
              <span>{s.name}</span>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-8">No matching states found.</p>
          )}
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
