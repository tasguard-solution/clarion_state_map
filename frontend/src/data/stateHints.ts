// src/data/stateHints.ts

import { type StateId } from "./nigeria";

export type StateInfo = {
  state?: string;
  hint: string;
  population?: number;
  gdp?: number;
  fertility?: number;
  voters?: number;
  capital?: string;
  funFact?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const STATE_INFO: Partial<Record<StateId, StateInfo>> = {
  lagos: {
    state: "Lagos",
    hint: "Lagos na the commercial capital...",
    population: 15000000,
    capital: "Ikeja",
    funFact: "Eko for show!",
    imageUrl: "src/assets/state-images/lagos/dami-akinbode-mxfzQRCBQ5M-unsplash.jpg"
  },
  kano: {
    state: "Kano",
    hint: "Kano na the commercial capital...",
    population: 15000000,
    capital: "Kano",
    funFact: "Eko for show!",
  },
  "federal-capital-territory": {
    state: "FCT",
    hint: "Abuja joh na the commercial capital...",
    population: 15000000,
    capital: "Abuja",
    funFact: "Eko for show!",
  },
  rivers: {
    state: "Rivers",
    hint: "Rivers na the commercial capital...",
    population: 9800000,
    capital: "PH",
    funFact: "PH for show!",
    imageUrl: "src/assets/state-images/rivers/SaveClip.App_599433709_18340976299235375_4066528250090760380_n.jpg"
  },
  "cross-river": {
    state: "Cross River",
    hint: "Calabar girls...",
    population: 15000000,
    capital: "Calabar",
    funFact: "UNICAL for show!",
  },
  
  // Add as many states as you want
  // You can make them fun, serious, or in Pidgin — whatever vibe you like

  // For states you haven't written yet, it will automatically fall back
} as const;   // 'as const' makes it more type-safe