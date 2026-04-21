// src/data/lagosElection.ts
// 2023 Presidential Election results for Lagos LGAs.
// Source: INEC LGALevelResult.csv (election/ folder)

export type Party = "APC" | "LP" | "PDP" | "NNPP";

export type LGAElectionResult = {
  lgaId: string;   // matches id in geo/lagos.json
  lgaName: string;
  apc: number;
  lp: number;
  pdp: number;
  nnpp: number;
  total: number;
  winner: Party;
};

function computeWinner(apc: number, lp: number, pdp: number, nnpp: number): Party {
  const scores: [Party, number][] = [["APC", apc], ["LP", lp], ["PDP", pdp], ["NNPP", nnpp]];
  return scores.reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0];
}

function lga(lgaId: string, lgaName: string, apc: number, lp: number, pdp: number, nnpp: number): LGAElectionResult {
  return { lgaId, lgaName, apc, lp, pdp, nnpp, total: apc + lp + pdp + nnpp, winner: computeWinner(apc, lp, pdp, nnpp) };
}

export const LAGOS_ELECTION_2023: LGAElectionResult[] = [
  lga("agege",           "Agege",           29568, 13270,  4498, 1513),
  lga("ajeromi-ifelodun","Ajeromi/Ifelodun", 25938, 35663,  4680,  436),
  lga("alimosho",        "Alimosho",         62909, 71327,  8201,  701),
  lga("amuwo-odofin",    "Amuwo-Odofin",     13318, 55547,  2383,  330),
  lga("apapa",           "Apapa",            15471,  7566,  2997,  338),
  lga("badagary",        "Badagry",          31903, 10956,  6024,  153),
  lga("epe",             "Epe",              19867,  3497,  5221,   76),
  lga("eti-osa",         "Eti-Osa",          15317, 42388,  3369,  381),
  lga("ibeju-lekki",     "Ibeju/Lekki",      14685, 10410,  2329,  104),
  lga("ifako-ijaye",     "Ifako-Ijaye",       30756, 25437,  3258,  232),
  lga("ikeja",           "Ikeja",            21276, 30004,  2280,  337),
  lga("ikorodu",         "Ikorodu",          50353, 28951,  4508,  400),
  lga("kosofe",          "Kosofe",           36883, 46554,  4058,  902),
  lga("lagosisland",     "Lagos Island",     27760,  3058,  2521,   79),
  lga("mainland",        "Lagos Mainland",   20030, 18698,  3005,  257),
  lga("mushin",          "Mushin",           41907, 23390,  3478,  410),
  lga("ojo",             "Ojo",              20603, 38859,  3701,  462),
  lga("oshodi-isolo",    "Oshodi/Isolo",     27181, 51020,  3139,  413),
  lga("shomolu",         "Shomolu",          27879, 28936,  3449,  476),
  lga("surulere",        "Surulere",         39002, 36923,  2651,  442),
];

// Quick lookup by LGA id
export const ELECTION_BY_LGA: Record<string, LGAElectionResult> =
  Object.fromEntries(LAGOS_ELECTION_2023.map((r) => [r.lgaId, r]));

export const PARTY_COLORS: Record<Party, string> = {
  APC:  "#3B8BD4",  // blue
  LP:   "#22c553",  // green
  PDP:  "#ef4444",  // red
  NNPP: "#f97316",  // orange
};
