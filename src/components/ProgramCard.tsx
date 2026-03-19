import { ExternalLink } from "lucide-react";
import type { Program, ProgramCategory } from "@/data/programs";

const CATEGORY_STYLES: Record<ProgramCategory, string> = {
  energy: "bg-energy/15 text-energy border-energy/30",
  water: "bg-water/15 text-water border-water/30",
  transportation: "bg-transport/15 text-transport border-transport/30",
  recycling: "bg-recycle/15 text-recycle border-recycle/30",
};

const CATEGORY_ICONS: Record<ProgramCategory, string> = {
  energy: "⚡",
  water: "💧",
  transportation: "🚗",
  recycling: "♻️",
};

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="group rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-serif text-lg text-card-foreground leading-snug">{program.name}</h3>
        <span
          className={`shrink-0 inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${CATEGORY_STYLES[program.category]}`}
        >
          {CATEGORY_ICONS[program.category]} {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{program.description}</p>
      <a
        href={program.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        Visit Official Site <ExternalLink size={14} />
      </a>
    </div>
  );
}
