const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { parse } = require("csv-parse/sync");

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:8080"
}));

const BASE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSH3v5Gd3ioKIhu4Zlkvp9CT9rFOSk7bbqag_AiwJB_JynlyA350NKkK8zKUVtMoPbK7YmEG8VMPCGO/pub";

const TABS = {
  state:     "0",
  federal:   "2103764198",
};

const STATE_NAME_TO_CODE = {
  "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
  "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
  "Deleware": "DE",
  "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID",
  "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS",
  "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
  "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
  "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV",
  "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
  "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
  "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT",
  "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV",
  "Wisconsin": "WI", "Wyoming": "WY", "District of Columbia": "DC",
  "Puerto Rico": "PR", "Guam": "GU", "U.S. Virgin Islands": "VI",
  "American Samoa": "AS", "Northern Mariana Islands": "MP"
};

async function fetchTab(gid) {
  const url = `${BASE_URL}?gid=${gid}&single=true&output=csv`;
  const response = await fetch(url);
  const text = await response.text();

  const rows = parse(text, {
    skip_empty_lines: true,
    from_line: 2,
    relax_quotes: true,
    relax_column_count: true,
  });

  return rows
    .map((cells, index) => {
      if (!cells[0] || !cells[1]) return null;

      const stateName = cells[0]?.trim();
      const state = STATE_NAME_TO_CODE[stateName] ?? stateName;

      return {
        id:          `prog-${gid}-${index}`,
        name:        cells[1]?.trim(),
        category:    cells[2]?.trim().toLowerCase(),
        state,
        description: cells[3]?.trim(),
        disclaimer:  cells[4]?.trim() || undefined,
        url:        cells[5]?.trim() || undefined, 
      };
    })
    .filter(Boolean);
}

let cache = null;
let cacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000;

app.get("/api/programs", async (req, res) => {
  try {
    if (cache && Date.now() - cacheTime < CACHE_DURATION) {
      return res.json(cache);
    }

    const [statePrograms, federalPrograms] = await Promise.all([
      fetchTab(TABS.state),
      fetchTab(TABS.federal),
    ]);

    const programs = [statePrograms, federalPrograms].flat();

    cache = programs;
    cacheTime = Date.now();
    res.json(programs);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch programs" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));