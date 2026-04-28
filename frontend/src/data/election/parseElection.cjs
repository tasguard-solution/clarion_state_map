const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'LGALevelResult.csv');
const tsPath = path.join(__dirname, '../electionData.ts');
const statesPath = path.join(__dirname, '../nigerianStates.json');

const nigerianStates = JSON.parse(fs.readFileSync(statesPath, 'utf8'));

function formatId(name) {
  if (!name) return '';
  return name.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const stateLgaMap = {};
nigerianStates.forEach(s => {
  const stateId = formatId(s.state);
  let finalStateId = stateId;
  if (stateId === 'fct') finalStateId = 'federal-capital-territory';
  if (stateId === 'nasarawa') finalStateId = 'nassarawa';
  
  stateLgaMap[finalStateId] = s.lgas.map(lga => ({
    name: lga,
    id: formatId(lga)
  }));
});

const MANUAL_MAPPING = {
    "obi-ngwa": ["obingwa", "obi-ngwa"],
    "isiala-ngwa-north": ["isialangwa-north", "isiala-ngwa-north"],
    "isiala-ngwa-south": ["isialangwa-south", "isiala-ngwa-south"],
    "esit-eket": ["esit-eket-uquo", "esit-eket"],
    "osisioma-ngwa": ["osisioma", "osisioma-ngwa"],
    "abuja-municipal": ["municipal", "abujamun", "abuja-municipal"],
    "kogi-k-k": ["kogi-k-k", "kotonkar", "kogi"],
    "ifedore": ["ifedor", "ifedore"],
    "orumba-north": ["orumbano", "orumba-north"],
    "orumba-south": ["orumbaso", "orumba-south"],
    "awka-north": ["awkanort", "awka-north"],
    "awka-south": ["awkasout", "awka-south"],
    "nnewi-north": ["nnewinort", "nnewi-north"],
    "nnewi-south": ["nnewisou", "nnewi-south"],
    "urue-offong-oruko": ["urueoffo", "urue-offong-oruko"],
    "calabar-municipality": ["calabar-municipal", "calabar-municipality"],
    "ahiazu-mbaise": ["ahizu-mb", "ahiazu-mbaise"],
    "esan-central": ["esancent", "esan-central"],
    "esan-north-east": ["esannort", "esan-north-east"],
    "esan-south-east": ["esansout", "esan-south-east"],
    "ovia-north-east": ["ovianort", "ovia-north-east"],
    "ovia-south-west": ["oviasouth-west", "ovia-south-west"],
    "emohua": ["emuoha", "emohua"],
    "odo-otin": ["odo0tin", "odo-otin"],
    "kontagora": ["kontogur", "kontagora"],
    "gwagwalada": ["gwagwala", "gwagwalada"],
    "aiyedade": ["ayedaade", "aiyedade"],
    "aiyedire": ["ayedire", "aiyedire"],
    "ilesa-east": ["ilesha-east", "ilesa-east"],
    "ilesa-west": ["ilesha-west", "ilesa-west"],
    "gbonyin": ["gboyin", "gbonyin"],
    "nasarawa-eggon": ["nassarawa-egon", "nasarawa-eggon", "nasarawa-eggon", "nasarawa eggon"],
    "yewa-north": ["egbadonorth", "yewa-north"],
    "yewa-south": ["egbadosouth", "yewa-south"],
    "wasagu-danko": ["danko-wasagu", "wasagu-danko"],
    "munya": ["muya", "munya"],
    "omuma": ["omumma", "omuma"],
    "tambuwal": ["tambawal", "tambuwal"],
    "bursari": ["borsari", "bursari"],
    "lagos-mainland": ["mainland", "lagos-mainland"],
    "yenagoa": ["yenegoa", "yenagoa"],
    "nasarawa": ["nassaraw", "nasarawa"],
    "tudun-wada": ["tundun-wada", "tudun-wada"],
    "kumi": ["kurmi", "kumi"],
    "ganjuwa": ["gamjuwa", "ganjuwa"],
    "yakuur": ["yakurr", "yakuur"],
    "garun-mallam": ["garum-mallam", "garun-mallam"],
    "kogi": ["kotonkar", "kogi"],
    "shomolu": ["somolu", "shomolu"],
    "oturkpo": ["otukpo", "oturkpo"],
    "shagamu": ["sagamu", "shagamu"],
    "biriniwa": ["birniwa", "biriniwa"],
    "shomgom": ["shomgom", "shongom"],
    "barkin-ladi": ["barkin-ladi", "barakin-ladi", "barikin-ladi"],
    "unuimo": ["onuimo", "unuimo"],
    "aleiro": ["aliero", "aleiro"],
    "pategi": ["patigi", "pategi"],
    "sabon-birni": ["s-birni", "sabon-birni"],
    "ogbomosho-south": ["ogbomoso-south", "ogbomosho-south"],
    "yamaltu-deba": ["yamaltu-deba", "yalmaltu-deba", "yamaltu-deba"],
    "ihiala": ["ihala", "ihiala"],
    "dambatta": ["danbata", "dambatta"],
    "dawakin-tofa": ["dawaki-tofa", "dawakin-tofa"],
    "malumfashi": ["malufashi", "malumfashi"],
    "edati": ["edatti", "edati"],
    "orelope": ["oorelope", "orelope"]
};

function findCanonicalLga(stateId, lgaStr) {
    const lgas = stateLgaMap[stateId];
    if (!lgas) return { id: formatId(lgaStr), name: lgaStr };
    
    const currentId = formatId(lgaStr);
    const cleanCurrent = currentId.replace(/-/g, '');
    
    let match = lgas.find(l => l.id === currentId || l.id.replace(/-/g, '') === cleanCurrent);
    if (match) return match;

    for (const [canonicalId, aliases] of Object.entries(MANUAL_MAPPING)) {
        if (aliases.includes(currentId) || aliases.includes(cleanCurrent)) {
            const canonicalMatch = lgas.find(l => l.id === canonicalId);
            if (canonicalMatch) return canonicalMatch;
        }
    }

    match = lgas.find(l => {
        const cleanL = l.id.replace(/-/g, '');
        return cleanL.startsWith(cleanCurrent.substring(0, 5)) || 
               cleanCurrent.startsWith(cleanL.substring(0, 5));
    });
    
    if (match) return match;

    return { id: currentId, name: lgaStr };
}

const csvData = fs.readFileSync(csvPath, 'utf8');
const lines = csvData.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const resultsByState = {};

function computeWinner(apc, lp, pdp, nnpp) {
  const scores = [["APC", apc], ["LP", lp], ["PDP", pdp], ["NNPP", nnpp]];
  return scores.sort((a, b) => b[1] - a[1])[0][0];
}

for (let i = 1; i < lines.length; i++) {
  const parts = lines[i].split(',');
  if (parts.length < 7) continue;

  let [state, , lgaStr, apcStr, lpStr, pdpStr, nnppStr] = parts;
  let stateId = formatId(state);
  if (stateId === "fct") stateId = "federal-capital-territory";
  if (stateId === "nasarawa") stateId = "nassarawa";

  const canonical = findCanonicalLga(stateId, lgaStr);
  
  // Check if it matched a known LGA
  const lgas = stateLgaMap[stateId];
  if (lgas && !lgas.find(l => l.id === canonical.id)) {
      console.warn(`[CSV] Unmatched LGA in ${stateId}: ${lgaStr} (${canonical.id})`);
  }
  
  const apc = parseInt(apcStr, 10) || 0;
  const lp = parseInt(lpStr, 10) || 0;
  const pdp = parseInt(pdpStr, 10) || 0;
  const nnpp = parseInt(nnppStr, 10) || 0;

  if (!resultsByState[stateId]) resultsByState[stateId] = [];

  resultsByState[stateId].push({
    lgaId: canonical.id,
    lgaName: canonical.name,
    apc, lp, pdp, nnpp,
    total: apc + lp + pdp + nnpp,
    winner: computeWinner(apc, lp, pdp, nnpp)
  });
}

const tsContent = `// Auto-generated from LGALevelResult.csv

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
  APC: "#3B8BD4",
  LP: "#22c553",
  PDP: "#ef4444",
  NNPP: "#f97316",
};

export const ELECTION_DATA: Record<string, LGAElectionResult[]> = ${JSON.stringify(resultsByState, null, 2)};

export function getElectionByLGA(stateId: string): Record<string, LGAElectionResult> {
  const stateData = ELECTION_DATA[stateId];
  if (!stateData) return {};
  return Object.fromEntries(stateData.map(r => [r.lgaId, r]));
}
`;

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log('Successfully generated standardized electionData.ts');
