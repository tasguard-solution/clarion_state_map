// src/data/stateHints.ts

import { type StateId } from "./nigeria";   // make sure this type is exported from your nigeria file

export const STATE_HINTS: Partial<Record<StateId, string>> = {
  lagos: "Lagos go soon get proper election results, population breakdown, and even flight data sef. Stay tuned!",
  kano: "Kano State — we dey add population trends, election history, and agricultural data later.",
  "federal-capital-territory": "Federal Capital Territory — administrative stats, election data, and more coming soon.",
  rivers: "Rivers State spotlight: oil economy, election results, and population data loading...",
  
  // Add as many states as you want
  // You can make them fun, serious, or in Pidgin — whatever vibe you like

  // For states you haven't written yet, it will automatically fall back
} as const;   // 'as const' makes it more type-safe