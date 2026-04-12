import { parse } from "csv-parse/sync";
import "dotenv/config";

export type AreaType = "state" | "territory" | "federal";

export interface Program {
  name: string;
  link: string;
  description: string;
  area: string;
  areaType: AreaType;
}

const SHEET_URLS = {
  state:     process.env.SHEETS_URL_STATE!,
  territory: process.env.SHEETS_URL_TERRITORY!,
  federal:   process.env.SHEETS_URL_FEDERAL!,
};

let programs: Program[] = [];
let lastFetched: Date | null = null;

async function fetchTab(url: string, areaType: AreaType): Promise<Program[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${areaType} tab`);

  const text = await res.text();
  const rows = parse(text, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  return rows.map((row) => ({
    name:        row["program"],
    link:        row["link"],
    description: row["description"],
    area:        row[areaType],   // grabs the value under "state", "territory", or "federal"
    areaType,
  }));
}

async function loadAllTabs() {
  try {
    const [states, territories, federal] = await Promise.all([
      fetchTab(SHEET_URLS.state,     "state"),
      fetchTab(SHEET_URLS.territory, "territory"),
      fetchTab(SHEET_URLS.federal,   "federal"),
    ]);

    programs = [...states, ...territories, ...federal];
    lastFetched = new Date();
    console.log(`Loaded ${programs.length} programs from Google Sheets`);
  } catch (err) {
    console.error("Failed to load sheets — keeping existing data:", err);
  }
}

// Load on startup, then poll every 30 seconds
loadAllTabs();
setInterval(loadAllTabs, Number(process.env.POLL_INTERVAL_MS) || 30_000);

export function getAll() { return programs; }
export function getLastFetched() { return lastFetched; }
export function getByAreaType(areaType: AreaType) {
  return programs.filter((p) => p.areaType === areaType);
}
export function getByArea(area: string) {
  return programs.filter((p) => p.area.toLowerCase() === area.toLowerCase());
}