import { ExternalLink } from "lucide-react";
import type { Program } from "@/data/programs";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="program-row">
      <div className="program-meta"><span className="category-label">{program.category}</span><span>{program.state || "Nationwide"}</span></div>
      <div className="program-content">
        <h2>{program.name}</h2>
        <p>{program.description}</p>
        {program.details && <details className="program-details"><summary>How to Access</summary><div>{program.details}</div></details>}
      </div>
      <a href={program.url} target="_blank" rel="noopener noreferrer" className="text-link official-link">Visit Official Site <ExternalLink size={14} aria-hidden="true" /><span className="sr-only"> for {program.name} (opens in a new tab)</span></a>
    </article>
  );
}
