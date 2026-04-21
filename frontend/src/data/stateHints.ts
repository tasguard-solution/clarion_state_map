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
  abia: {
    state: "Abia",
    hint: "",
    population: 3500000,
    capital: "Umuahia",
    funFact: "",
  },
  adamawa: {
    state: "Adamawa",
    hint: "",
    population: 3900000,
    capital: "Yola",
    funFact: ""
  },
  "akwa-ibom": {
    state: "Akwa Ibom",
    hint: "",
    population: 4800000,
    capital: "Uyo",
    funFact: ""
  },
  anambra: {
    state: "Anambra",
    hint: "",
    population: 9800000,
    capital: "Awka",
    funFact: ""
  },
  bauchi: {
    state: "Bauchi",
    hint: "",
    population: 6500000,
    capital: "Bauchi",
    funFact: ""
  },
  bayelsa: {
    state: "Bayelsa",
    hint: "",
    population: 2500000,
    capital: "Yenagoa",
    funFact: ""
  },
  benue: {
    state: "Benue",
    hint: "",
    population: 5300000,
    capital: "Makurdi",
    funFact: ""
  },
  borno: {
    state: "Borno",
    hint: "",
    population: 6500000,
    capital: "Maiduguri",
    funFact: ""
  },
  "cross-river": {
    state: "Cross River",
    hint: "",
    population: 4500000,
    capital: "Calabar",
    funFact: ""
  },
  delta: {
    state: "Delta",
    hint: "",
    population: 5500000,
    capital: "Asaba",
    funFact: ""
  },
  ebonyi: {
    state: "Ebonyi",
    hint: "",
    population: 2500000,
    capital: "Abakaliki",
    funFact: ""
  },
  edo: {
    state: "Edo",
    hint: "",
    population: 5000000,
    capital: "Benin City",
    funFact: ""
  },
  ekiti: {
    state: "Ekiti",
    hint: "",
    population: 3500000,
    capital: "Ado-Ekiti",
    funFact: ""
  },
  enugu: {
    state: "Enugu",
    hint: "",
    population: 4500000,
    capital: "Enugu",
    funFact: ""
  },
  gombe: {
    state: "Gombe",
    hint: "",
    population: 3500000,
    capital: "Gombe",
    funFact: ""
  },
  imo: {
    state: "Imo",
    hint: "",
    population: 5500000,
    capital: "Owerri",
    funFact: ""
  },
  jigawa: {
    state: "Jigawa",
    hint: "",
    population: 5500000,
    capital: "Dutse",
    funFact: ""
  },
  kaduna: {
    state: "Kaduna",
    hint: "",
    population: 8500000,
    capital: "Kaduna",
    funFact: ""
  },
  kano: {
    state: "Kano",
    hint: "",
    population: 15000000,
    capital: "Kano",
    funFact: ""
  },
  katsina: {
    state: "Katsina",
    hint: "",
    population: 8500000,
    capital: "Katsina",
    funFact: ""
  },
  kebbi: {
    state: "Kebbi",
    hint: "",
    population: 4500000,
    capital: "Birnin Kebbi",
    funFact: ""
  },
  kogi: {
    state: "Kogi",
    hint: "",
    population: 4500000,
    capital: "Lokoja",
    funFact: ""
  },
  kwara: {
    state: "Kwara",
    hint: "",
    population: 3500000,
    capital: "Ilorin",
    funFact: ""
  },
  lagos: {
    state: "Lagos",
    hint: "Lagos na the commercial capital...",
    population: 15000000,
    capital: "Ikeja",
    funFact: "Eko for show!",
    imageUrl: "src/assets/state-images/lagos/dami-akinbode-mxfzQRCBQ5M-unsplash.jpg"
  },
  nassarawa: {
    state: "Nassarawa",
    hint: "",
    population: 2500000,
    capital: "Lafia",
    funFact: ""
  },
  niger: {
    state: "Niger",
    hint: "",
    population: 5500000,
    capital: "Minna",
    funFact: ""
  },
  ogun: {
    state: "Ogun",
    hint: "",
    population: 5500000,
    capital: "Abeokuta",
    funFact: ""
  },
  ondo: {
    state: "Ondo",
    hint: "",
    population: 4500000,
    capital: "Akure",
    funFact: ""
  },
  osun: {
    state: "Osun",
    hint: "",
    population: 4500000,
    capital: "Oshogbo",
    funFact: ""
  },
  oyo: {
    state: "Oyo",
    hint: "",
    population: 8500000,
    capital: "Ibadan",
    funFact: ""
  },
  plateau: {
    state: "Plateau",
    hint: "",
    population: 4500000,
    capital: "Jos",
    funFact: ""
  },
  rivers: {
    state: "Rivers",
    hint: "",
    population: 9800000,
    capital: "PH",
    funFact: ""
  },
  sokoto: {
    state: "Sokoto",
    hint: "",
    population: 4500000,
    capital: "Sokoto",
    funFact: ""
  },
  taraba: {
    state: "Taraba",
    hint: "",
    population: 3500000,
    capital: "Jalingo",
    funFact: ""
  },
  yobe: {
    state: "Yobe",
    hint: "",
    population: 2500000,
    capital: "Damaturu",
    funFact: ""
  },
  zamfara: {
    state: "Zamfara",
    hint: "",
    population: 4500000,
    capital: "Gusau",
    funFact: ""
  },
  "federal-capital-territory": {
    state: "FCT",
    hint: "Abuja joh na the commercial capital...",
    population: 15000000,
    capital: "Abuja",
    funFact: "Eko for show!",
  }
} as const;   // 'as const' makes it more type-safe