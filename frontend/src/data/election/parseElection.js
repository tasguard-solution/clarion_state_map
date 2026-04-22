const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'LGALevelResult.csv');
const tsPath = path.join(__dirname, '../electionData.ts');

const csvData = fs.readFileSync(csvPath, 'utf8');
const lines = csvData.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// State,S/N,LGA,APC,LP,PDP,NNPP

const resultsByState = {};

function formatId(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function computeWinner(apc, lp, pdp, nnpp) {
  const scores = [["APC", apc], ["LP", lp], ["PDP", pdp], ["NNPP", nnpp]];
  return scores.reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0];
}

for (let i = 1; i < lines.length; i++) {
  // some LGA names might have commas? Assuming no for this specific CSV based on what we saw
  const parts = lines[i].split(',');
  if (parts.length < 7) continue;

  let [state, sn, lgaStr, apcStr, lpStr, pdpStr, nnppStr] = parts;
  let stateId = formatId(state);
  
  if (stateId === "fct") stateId = "federal-capital-territory";
  if (stateId === "akwa-ibom") stateId = "akwa-ibom"; // stays the same
  if (stateId === "cross-river") stateId = "cross-river";
  
  const lgaId = formatId(lgaStr);
  const lgaName = lgaStr;
  
  const apc = parseInt(apcStr, 10) || 0;
  const lp = parseInt(lpStr, 10) || 0;
  const pdp = parseInt(pdpStr, 10) || 0;
  const nnpp = parseInt(nnppStr, 10) || 0;

  if (!resultsByState[stateId]) {
    resultsByState[stateId] = [];
  }

  resultsByState[stateId].push({
    lgaId,
    lgaName,
    apc,
    lp,
    pdp,
    nnpp,
    total: apc + lp + pdp + nnpp,
    winner: computeWinner(apc, lp, pdp, nnpp)
  });
}

let tsContent = `// Auto-generated from LGALevelResult.csv

export type Party = "APC" | "LP" | "PDP" | "NNPP";

export type LGAElectionResult = {
  lgaId: string;
  lgaName: string;
  apc: number;
  lp: number;
  pdp: number;
  nnpp: number;
  total: number;
  winner: Party;
};

export const PARTY_COLORS: Record<Party, string> = {
  APC:  "#3B8BD4",  // blue
  LP:   "#22c553",  // green
  PDP:  "#ef4444",  // red
  NNPP: "#f97316",  // orange
};

export const ELECTION_DATA: Record<string, LGAElectionResult[]> = ${JSON.stringify(resultsByState, null, 2)};

export function getElectionByLGA(stateId: string): Record<string, LGAElectionResult> {
  const stateData = ELECTION_DATA[stateId];
  if (!stateData) return {};
  return Object.fromEntries(stateData.map(r => [r.lgaId, r]));
}
`;

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log('Successfully generated electionData.ts');
