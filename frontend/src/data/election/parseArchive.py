import csv
import json
import re
import os

archive_dir = 'archive'
output_path = '../historicalData.ts'

# Years to process (skipping 2007)
pres_years = ['1999', '2003', '2011', '2015', '2019']

historical_data = {}

def format_id(name):
    name = name.lower().strip()
    name = re.sub(r'[^a-z0-9]', '-', name)
    name = re.sub(r'-+', '-', name)
    return name.strip('-')

# Standardise state IDs to match the app's current geo data
def sanitize_state_id(sid):
    if sid == 'fct': return 'federal-capital-territory'
    if sid == 'nasarawa': return 'nassarawa'
    return sid

for year in pres_years:
    filename = f"{year}pres.csv"
    filepath = os.path.join(archive_dir, filename)
    
    if not os.path.exists(filepath):
        print(f"Skipping {filename}, not found.")
        continue

    historical_data[year] = {}

    with open(filepath, 'r', encoding='utf-8') as f:
        # Some CSVs might have extra spaces or weird headers
        reader = csv.DictReader(f)
        for row in reader:
            # Strip whitespace from keys and values
            clean_row = {k.strip().lower(): v.strip() for k, v in row.items()}
            
            state_name = clean_row.get('state')
            if not state_name: continue
            
            state_id = sanitize_state_id(format_id(state_name))
            
            # For archive data, we are focusing on the total votes and winner
            # We'll just capture the raw party data provided in each CSV
            # Note: 2011 has many parties, 1999 has few.
            winner = clean_row.get('winner', 'Unknown')
            
            # Identify party votes (exclude non-party columns)
            exclude = ['state', 'totvotes', 'regvoters', 'winner', 'totalvotes', 'otherparties', 'sn']
            party_votes = {}
            for k, v in clean_row.items():
                if k not in exclude and v.isdigit():
                    party_votes[k.upper()] = int(v)
            
            historical_data[year][state_id] = {
                "stateName": state_name,
                "winner": winner.upper(),
                "votes": party_votes,
                "total": int(clean_row.get('totvotes', clean_row.get('totalvotes', 0)) or 0)
            }

ts_content = f"""// Auto-generated historical election data
export type HistoricalStateResult = {{
  stateName: string;
  winner: string;
  votes: Record<string, number>;
  total: number;
}};

export const HISTORICAL_DATA: Record<string, Record<string, HistoricalStateResult>> = {json.dumps(historical_data, indent=2)};

export const AVAILABLE_YEARS = ["1999", "2003", "2011", "2015", "2019", "2023"];
"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully generated historicalData.ts")
