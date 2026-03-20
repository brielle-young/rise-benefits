export type ProgramCategory = "energy" | "water" | "transportation" | "recycling";

export interface Program {
  id: string;
  name: string;
  category: ProgramCategory;
  state: string;
  description: string;
  url: string;
  details?: string;
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
  { id: "f1", name: "Energy Star Rebates", category: "energy", state: "federal", description: "Federal tax credits and rebates for energy-efficient home improvements including insulation, windows, doors, and HVAC systems.", url: "https://www.energystar.gov/rebates", details: "To apply: 1) Purchase qualifying Energy Star certified products. 2) Save your receipts and manufacturer certification statements. 3) File IRS Form 5695 with your federal tax return. Credits cover 30% of costs up to $3,200/year." },
  { id: "f2", name: "Weatherization Assistance Program", category: "energy", state: "federal", description: "Helps low-income families reduce energy costs by improving energy efficiency of their homes at no cost.", url: "https://www.energy.gov/eere/wap/weatherization-assistance-program", details: "Eligibility: household income at or below 200% of federal poverty level. Contact your state's weatherization agency to apply. Services include air sealing, insulation, furnace repair/replacement, and energy audits — all provided free of charge." },
  { id: "f3", name: "WaterSense Program", category: "water", state: "federal", description: "EPA partnership program helping consumers identify water-efficient products and save on water bills.", url: "https://www.epa.gov/watersense", details: "Look for the WaterSense label when purchasing toilets, faucets, showerheads, and irrigation controllers. WaterSense-labeled products are 20% more efficient than average. Many local utilities offer additional rebates for WaterSense products." },
  { id: "f4", name: "Federal EV Tax Credit", category: "transportation", state: "federal", description: "Tax credits up to $7,500 for purchasing new qualifying electric vehicles and $4,000 for used EVs.", url: "https://fueleconomy.gov/feg/tax2023.shtml", details: "For new EVs: verify the vehicle qualifies at fueleconomy.gov, confirm MSRP limits ($55k cars / $80k trucks/SUVs), and income limits ($150k single / $300k joint). For used EVs: must be at least 2 model years old, price under $25k, income limit $75k single." },
  { id: "f5", name: "Inflation Reduction Act Home Rebates", category: "energy", state: "federal", description: "Up to $14,000 in rebates for heat pumps, electrical panels, insulation, and other energy-efficient upgrades.", url: "https://www.energy.gov/save", details: "Two programs: HOMES (whole-home efficiency) and HEAR (point-of-sale electrification rebates). Income-qualified households receive higher rebates. Check with your state energy office for availability — rollout varies by state." },
  { id: "f6", name: "Recycling Infrastructure Grants", category: "recycling", state: "federal", description: "EPA grants to improve recycling infrastructure and reduce contamination in the recycling stream.", url: "https://www.epa.gov/recyclingstrategy", details: "Primarily available to municipalities and tribal governments, but residents benefit through improved local recycling services. Check EPA's grant announcements for current funding cycles." },

  { id: "ca1", name: "Self-Generation Incentive Program", category: "energy", state: "CA", description: "Rebates for installing energy storage systems paired with solar panels for California residents.", url: "https://www.selfgenca.com/", details: "Apply through your utility (PG&E, SCE, SDG&E, or SoCalGas). Rebates range from $150–$1,000/kWh depending on system size and equity eligibility. Must use a participating contractor." },
  { id: "ca2", name: "CVRP Clean Vehicle Rebate", category: "transportation", state: "CA", description: "Rebates up to $7,500 for purchasing or leasing eligible zero-emission vehicles in California.", url: "https://cleanvehiclerebate.org/", details: "Apply within 90 days of vehicle purchase/lease. Income caps apply: $135k single / $200k joint for standard rebates. Increased rebates available for households below 400% of federal poverty level." },
  { id: "ca3", name: "Turf Replacement Program", category: "water", state: "CA", description: "Rebates for replacing water-intensive lawns with drought-tolerant landscaping.", url: "https://socalwatersmart.com/", details: "Typically $2–$3 per square foot removed. Must apply and receive approval before starting work. Minimum area requirements vary by utility." },
  { id: "ca4", name: "CalRecycle Beverage Container Program", category: "recycling", state: "CA", description: "Cash refunds for recycling eligible beverage containers at certified recycling centers.", url: "https://www.calrecycle.ca.gov/bevcontainer", details: "CRV refund values: 5¢ for containers under 24 oz, 10¢ for 24 oz and larger. Find certified recycling centers at CalRecycle.ca.gov." },

  { id: "ny1", name: "NY-Sun Solar Incentive", category: "energy", state: "NY", description: "Financial incentives to make solar more affordable for New York homeowners and renters.", url: "https://www.nyserda.ny.gov/ny-sun", details: "Work with a NYSERDA-approved installer to receive upfront incentives that reduce installation costs. Community solar options available for renters." },
  { id: "ny2", name: "Drive Clean Rebate", category: "transportation", state: "NY", description: "Rebates up to $2,000 for purchasing or leasing new electric vehicles in New York.", url: "https://www.nyserda.ny.gov/drive-clean-rebate", details: "Applied at point of sale by participating dealers. MSRP must be under $42,000. Can be combined with federal EV tax credit." },
  { id: "ny3", name: "Water Efficiency Program", category: "water", state: "NY", description: "Free water-saving devices and rebates for efficient fixtures for NYC residents.", url: "https://www1.nyc.gov/site/dep/water/water-conservation.page", details: "NYC DEP offers free toilet replacement for qualifying older models, free water-saving kits, and leak detection services. Request a kit online or by calling 311." },

  { id: "tx1", name: "Texas LoanSTAR Program", category: "energy", state: "TX", description: "Low-interest loans for energy efficiency retrofits in Texas public buildings and institutions.", url: "https://comptroller.texas.gov/programs/seco/loanstar/", details: "Available to public entities (schools, cities, counties, hospitals). Interest rates are typically below market rate. Loan repayment comes from energy cost savings." },
  { id: "tx2", name: "Texas Water Development Board Programs", category: "water", state: "TX", description: "Financial assistance for water conservation and infrastructure projects across Texas.", url: "https://www.twdb.texas.gov/", details: "TWDB offers multiple programs including the State Water Implementation Fund and the Rural Water Assistance Fund. Check with your local water utility for residential conservation rebates." },
  { id: "tx3", name: "AirCheckTexas", category: "transportation", state: "TX", description: "Repair assistance and vehicle replacement incentives for low-income Texans in eligible counties.", url: "https://www.airchecktexas.org/", details: "Two options: repair assistance up to $600, or vehicle replacement vouchers ($3,500 standard / $3,000 hybrid). Must be in an eligible county and meet income requirements (≤300% federal poverty level)." },
];

export function getProgramsByState(stateCode: string): Program[] {
  return SAMPLE_PROGRAMS.filter((p) => p.state === stateCode);
}

export function getFederalPrograms(): Program[] {
  return SAMPLE_PROGRAMS.filter((p) => p.state === "federal");
}

export function getAllStatePrograms(): Program[] {
  return SAMPLE_PROGRAMS.filter((p) => p.state !== "federal");
}

export function getStateName(code: string): string {
  return US_STATES.find((s) => s.code === code)?.name ?? code;
}
