import { CATEGORIES, type ProgramCategory } from "@/data/programs";
interface Props { active: ProgramCategory | "all"; onChange: (cat: ProgramCategory | "all") => void; }
export default function CategoryFilter({ active, onChange }: Props) {
  return <div className="category-filter" role="group" aria-label="Filter programs by category">
    {[{ key: "all" as const, label: "All Programs" }, ...CATEGORIES].map((cat) => <button key={cat.key} aria-pressed={active === cat.key} onClick={() => onChange(cat.key)}>{cat.label}</button>)}
  </div>;
}
