// import { useState, useMemo } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import { type ProgramCategory } from "@/data/programs";
// import { usePrograms } from "@/hooks/usePrograms";
// import ProgramCard from "@/components/ProgramCard";
// import CategoryFilter from "@/components/CategoryFilter";

// export default function FederalPage() {
//   const [searchParams] = useSearchParams();
//   const initialCat = (searchParams.get("category") as ProgramCategory) || "all";
//   const [filter, setFilter] = useState<ProgramCategory | "all">(initialCat);
//   const { programs, loading, error } = usePrograms();

//   const federalPrograms = programs.filter(p => p.state === "federal");

//   const filtered = useMemo(
//     () => (filter === "all" ? federalPrograms : federalPrograms.filter((p) => p.category === filter)),
//     [federalPrograms, filter]
//   );

//   return (
//     <div className="container py-12">
//       <p className="text-sm text-muted-foreground mb-1">
//         <Link to="/" className="hover:text-foreground transition-colors">Home</Link> / Federal Programs
//       </p>
//       <h1 className="font-serif text-3xl md:text-4xl mb-2">Federal Programs</h1>
//       <p className="text-muted-foreground mb-8">
//         Nationwide sustainability programs available to residents across all states and territories.
//       </p>

//       <div className="rounded-lg border border-secondary/40 bg-secondary/10 p-4 mb-8 text-sm text-muted-foreground">
//         <strong className="text-foreground">Note:</strong> Federal programs may be administered through state agencies or local utilities. Check your state page for local implementation details.
//       </div>

//       <CategoryFilter active={filter} onChange={setFilter} />

//       <div className="mt-8 grid gap-4 sm:grid-cols-2">
//         {filtered.map((p) => (
//           <ProgramCard key={p.id} program={p} />
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { type ProgramCategory } from "@/data/programs";
import { usePrograms } from "@/hooks/usePrograms";
import ProgramCard from "@/components/ProgramCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function FederalPage() {
  const [searchParams] = useSearchParams();
  const initialCat = (searchParams.get("category") as ProgramCategory) || "all";
  const [filter, setFilter] = useState<ProgramCategory | "all">(initialCat);
  const { programs, loading, error } = usePrograms();

  const federalPrograms = programs.filter(p => p.state === "federal");

  const filtered = useMemo(
    () => (filter === "all" ? federalPrograms : federalPrograms.filter((p) => p.category === filter)),
    [federalPrograms, filter]
  );

  if (loading) return <div className="container py-12 text-muted-foreground">Loading programs...</div>;
  if (error) return <div className="container py-12 text-muted-foreground">Failed to load programs.</div>;

  return (
    <div className="container py-12">
      <p className="text-sm text-muted-foreground mb-1">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link> / Federal Programs
      </p>
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Federal Programs</h1>
      <p className="text-muted-foreground mb-8">
        Nationwide sustainability programs available to residents across all states and territories.
      </p>

      <div className="rounded-lg border border-secondary/40 bg-secondary/10 p-4 mb-8 text-sm text-muted-foreground">
        <strong className="text-foreground">Note:</strong> Federal programs may be administered through state agencies or local utilities. Check your state page for local implementation details.
      </div>

      <CategoryFilter active={filter} onChange={setFilter} />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
    </div>
  );
}