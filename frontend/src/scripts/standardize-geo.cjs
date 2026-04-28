const fs = require('fs');
const path = require('path');

const NIGERIAN_STATES_PATH = path.join(__dirname, '../data/nigerianStates.json');
const GEO_DIR = path.join(__dirname, '../data/geo');

const nigerianStates = JSON.parse(fs.readFileSync(NIGERIAN_STATES_PATH, 'utf8'));

function formatId(name) {
  if (!name) return '';
  return name.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

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
    "nasarawa-eggon": ["nassarawa-egon", "nasarawa-eggon", "nasarawa-egon"],
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

function findCanonicalLga(stateId, currentLgaNameOrId) {
    const lgas = stateLgaMap[stateId];
    if (!lgas) return null;

    const currentId = formatId(currentLgaNameOrId);
    const cleanCurrent = currentId.replace(/-/g, '');
    
    // 1. Exact or Clean ID match
    let match = lgas.find(l => l.id === currentId || l.id.replace(/-/g, '') === cleanCurrent);
    if (match) return match;

    // 2. Manual mapping match
    for (const [canonicalId, aliases] of Object.entries(MANUAL_MAPPING)) {
        if (aliases.includes(currentId) || aliases.includes(cleanCurrent)) {
            const canonicalMatch = lgas.find(l => l.id === canonicalId);
            if (canonicalMatch) return canonicalMatch;
        }
    }

    // 3. Fuzzy match - starts with or contains (clean)
    match = lgas.find(l => {
        const cleanL = l.id.replace(/-/g, '');
        return cleanL.startsWith(cleanCurrent.substring(0, 5)) || 
               cleanCurrent.startsWith(cleanL.substring(0, 5));
    });
    
    return match || null;
}

console.log("Standardizing GeoJSON files...");
const geoFiles = fs.readdirSync(GEO_DIR).filter(f => f.endsWith('.json') && f !== '_geojson_cache.json' && f !== 'nigeria-lgas.json');

geoFiles.forEach(file => {
    const stateId = file.replace('.json', '');
    const geoPath = path.join(GEO_DIR, file);
    const geoData = JSON.parse(fs.readFileSync(geoPath, 'utf8'));

    if (!geoData.lgas) return;

    geoData.lgas.forEach(lga => {
        const match = findCanonicalLga(stateId, lga.id) || findCanonicalLga(stateId, lga.name);
        if (match) {
            lga.id = match.id;
            lga.name = match.name;
        } else {
            if (lga.id !== 'lake-chad') {
                console.warn(`[GEO] Unmatched LGA in ${stateId}: ${lga.id} (${lga.name})`);
            }
        }
    });

    fs.writeFileSync(geoPath, JSON.stringify(geoData, null, 4));
});

console.log("GeoJSON standardization complete!");
