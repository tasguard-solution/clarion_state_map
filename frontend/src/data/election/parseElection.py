import csv
import json
import re

csv_path = 'LGALevelResult.csv'
ts_path = '../electionData.ts'

results_by_state = {}

def format_id(name):
    name = name.lower().strip()
    name = re.sub(r'[^a-z0-9]', '-', name)
    name = re.sub(r'-+', '-', name)
    return name.strip('-')

def compute_winner(apc, lp, pdp, nnpp):
    scores = [("APC", apc), ("LP", lp), ("PDP", pdp), ("NNPP", nnpp)]
    return max(scores, key=lambda x: x[1])[0]

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    
    for row in reader:
        if len(row) < 7: continue
        state_str = row[0]
        lga_str = row[2]
        apc_str = row[3]
        lp_str = row[4]
        pdp_str = row[5]
        nnpp_str = row[6]
        
        state_id = format_id(state_str)
        # Harmonize with GeoJSON filenames and stateHints keys
        if state_id == 'fct':
            state_id = 'federal-capital-territory'
        if state_id == 'nasarawa':
            state_id = 'nassarawa'
            
        lga_id = format_id(lga_str)
        lga_name = lga_str.strip()
        
        try:
            apc = int(apc_str) if apc_str.strip() else 0
            lp = int(lp_str) if lp_str.strip() else 0
            pdp = int(pdp_str) if pdp_str.strip() else 0
            nnpp = int(nnpp_str) if nnpp_str.strip() else 0
        except ValueError:
            continue
        
        total = apc + lp + pdp + nnpp
        winner = compute_winner(apc, lp, pdp, nnpp)
        
        if state_id not in results_by_state:
            results_by_state[state_id] = []
            
        results_by_state[state_id].append({
            "lgaId": lga_id,
            "lgaName": lga_name,
            "apc": apc,
            "lp": lp,
            "pdp": pdp,
            "nnpp": nnpp,
            "total": total,
            "winner": winner
        })

ts_content = f"""// Auto-generated from LGALevelResult.csv

export type Party = "APC" | "LP" | "PDP" | "NNPP";

export type LGAElectionResult = {{
  lgaId: string;
  lgaName: string;
  apc: number;
  lp: number;
  pdp: number;
  nnpp: number;
  total: number;
  winner: Party;
}};

export const PARTY_COLORS: Record<Party, string> = {{
  APC:  "#3B8BD4",
  LP:   "#22c553",
  PDP:  "#ef4444",
  NNPP: "#f97316",
}};

export const ELECTION_DATA: Record<string, LGAElectionResult[]> = {json.dumps(results_by_state, indent=2)};

export function getElectionByLGA(stateId: string): Record<string, LGAElectionResult> {{
  const stateData = ELECTION_DATA[stateId];
  if (!stateData) return {{}};
  return Object.fromEntries(stateData.map(r => [r.lgaId, r]));
}}
"""

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully generated electionData.ts with harmonize IDs")
