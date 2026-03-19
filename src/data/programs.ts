export type ProgramCategory = "energy" | "water" | "transportation" | "recycling";

export interface Program {
  id: string;
  name: string;
  category: ProgramCategory;
  state: string; // "federal" or state code like "CA"
  description: string;
  url: string;
}

export const CATEGORIES: { key: ProgramCategory; label: string; icon: string }[] = [
  { key: "energy", label: "Energy", icon: "⚡" },
  { key: "water", label: "Water", icon: "💧" },
  { key: "transportation", label: "Transportation", icon: "🚗" },
  { key: "recycling", label: "Recycling", icon: "♻️" },
];

export const US_STATES = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" },
  { code: "PR", name: "Puerto Rico" }, { code: "GU", name: "Guam" },
  { code: "VI", name: "U.S. Virgin Islands" }, { code: "AS", name: "American Samoa" },
  { code: "MP", name: "Northern Mariana Islands" },
];

export const SAMPLE_PROGRAMS: Program[] = [
  // Federal programs
  { id: "f1", name: "Energy Star Rebates", category: "energy", state: "federal", description: "Federal tax credits and rebates for energy-efficient home improvements including insulation, windows, doors, and HVAC systems.", url: "https://www.energystar.gov/rebates" },
  { id: "f2", name: "Weatherization Assistance Program", category: "energy", state: "federal", description: "Helps low-income families reduce energy costs by improving energy efficiency of their homes at no cost.", url: "https://www.energy.gov/eere/wap/weatherization-assistance-program" },
  { id: "f3", name: "WaterSense Program", category: "water", state: "federal", description: "EPA partnership program helping consumers identify water-efficient products and save on water bills.", url: "https://www.epa.gov/watersense" },
  { id: "f4", name: "Federal EV Tax Credit", category: "transportation", state: "federal", description: "Tax credits up to $7,500 for purchasing new qualifying electric vehicles and $4,000 for used EVs.", url: "https://fueleconomy.gov/feg/tax2023.shtml" },
  { id: "f5", name: "Inflation Reduction Act Home Rebates", category: "energy", state: "federal", description: "Up to $14,000 in rebates for heat pumps, electrical panels, insulation, and other energy-efficient upgrades.", url: "https://www.energy.gov/save" },
  { id: "f6", name: "Recycling Infrastructure Grants", category: "recycling", state: "federal", description: "EPA grants to improve recycling infrastructure and reduce contamination in the recycling stream.", url: "https://www.epa.gov/recyclingstrategy" },

  // California
  { id: "ca1", name: "Self-Generation Incentive Program", category: "energy", state: "CA", description: "Rebates for installing energy storage systems paired with solar panels for California residents.", url: "https://www.selfgenca.com/" },
  { id: "ca2", name: "CVRP Clean Vehicle Rebate", category: "transportation", state: "CA", description: "Rebates up to $7,500 for purchasing or leasing eligible zero-emission vehicles in California.", url: "https://cleanvehiclerebate.org/" },
  { id: "ca3", name: "Turf Replacement Program", category: "water", state: "CA", description: "Rebates for replacing water-intensive lawns with drought-tolerant landscaping.", url: "https://socalwatersmart.com/" },
  { id: "ca4", name: "CalRecycle Beverage Container Program", category: "recycling", state: "CA", description: "Cash refunds for recycling eligible beverage containers at certified recycling centers.", url: "https://www.calrecycle.ca.gov/bevcontainer" },

  // New York
  { id: "ny1", name: "NY-Sun Solar Incentive", category: "energy", state: "NY", description: "Financial incentives to make solar more affordable for New York homeowners and renters.", url: "https://www.nyserda.ny.gov/ny-sun" },
  { id: "ny2", name: "Drive Clean Rebate", category: "transportation", state: "NY", description: "Rebates up to $2,000 for purchasing or leasing new electric vehicles in New York.", url: "https://www.nyserda.ny.gov/drive-clean-rebate" },
  { id: "ny3", name: "Water Efficiency Program", category: "water", state: "NY", description: "Free water-saving devices and rebates for efficient fixtures for NYC residents.", url: "https://www1.nyc.gov/site/dep/water/water-conservation.page" },

  // Texas
  { id: "tx1", name: "Texas LoanSTAR Program", category: "energy", state: "TX", description: "Low-interest loans for energy efficiency retrofits in Texas public buildings and institutions.", url: "https://comptroller.texas.gov/programs/seco/loanstar/" },
  { id: "tx2", name: "Texas Water Development Board Programs", category: "water", state: "TX", description: "Financial assistance for water conservation and infrastructure projects across Texas.", url: "https://www.twdb.texas.gov/" },
  { id: "tx3", name: "AirCheckTexas", category: "transportation", state: "TX", description: "Repair assistance and vehicle replacement incentives for low-income Texans in eligible counties.", url: "https://www.airchecktexas.org/" },
];

export function getProgramsByState(stateCode: string): Program[] {
  return SAMPLE_PROGRAMS.filter((p) => p.state === stateCode);
}

export function getFederalPrograms(): Program[] {
  return SAMPLE_PROGRAMS.filter((p) => p.state === "federal");
}

export function getStateName(code: string): string {
  return US_STATES.find((s) => s.code === code)?.name ?? code;
}
