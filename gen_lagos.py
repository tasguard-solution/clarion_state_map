import json

with open("data/nigeria-lgas.json") as f:
    d = json.load(f)

lagos = d["states"]["lagos"]
vw = lagos["viewbox"]
lgas = lagos["lgas"]

with open("../src/data/lagosLgas.ts", "w") as out:
    out.write(f"export const VIEWBOX = '{vw}';\n\n")
    out.write("export interface LgaShape {\n  id: string;\n  name: string;\n  d: string;\n  cx: number;\n  cy: number;\n  rating?: number;\n  reviews_count?: number;\n  lgi_name?: string;\n}\n\n")
    out.write("export const LAGOS_LGAS: LgaShape[] = [\n")
    for l in lgas:
        cid = l["id"]
        cname = l["name"]
        cd = l["d"]
        ccx = l["cx"]
        ccy = l["cy"]
        out.write(f"  {{ id: '{cid}', name: '{cname}', d: '{cd}', cx: {ccx}, cy: {ccy}, rating: 3.5, reviews_count: 50, lgi_name: 'Mr. Example' }},\n")
    out.write("];\n")
