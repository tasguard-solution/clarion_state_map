"""
generate.py
Run this once before starting the API (called automatically by start.sh).
Downloads the Nigeria GeoJSON and produces data/nigeria-lgas.json.
"""

import json
import math
import urllib.request
from collections import defaultdict
from pathlib import Path

URL = "https://raw.githubusercontent.com/qedsoftware/geojson_data/master/nigeria-lga.geojson"

print("⬇️  Fetching Nigeria LGA GeoJSON...")
with urllib.request.urlopen(URL, timeout=30) as r:
    data = json.loads(r.read())
print(f"✅ Loaded {len(data['features'])} features")

# Group by state
state_features = defaultdict(list)
for feat in data["features"]:
    state = (feat.get("properties", {}).get("NAME_1") or "").strip().title()
    if state:
        state_features[state].append(feat)


def process_state(features):
    if not features:
        return None

    all_coords = []
    for feat in features:
        geom = feat["geometry"]
        rings = (
            geom["coordinates"]
            if geom["type"] == "Polygon"
            else [r for p in geom["coordinates"] for r in p]
        )
        for ring in rings:
            all_coords.extend(ring)

    min_lng = min(c[0] for c in all_coords)
    max_lng = max(c[0] for c in all_coords)
    min_lat = min(c[1] for c in all_coords)
    max_lat = max(c[1] for c in all_coords)

    lat_mid = (min_lat + max_lat) / 2.0
    lng_range = max_lng - min_lng
    lat_range = max_lat - min_lat
    geo_aspect = (lng_range * math.cos(math.radians(lat_mid))) / lat_range

    VW = 1000
    VH = round(VW / geo_aspect)

    def project(lng, lat):
        x = (lng - min_lng) / lng_range * VW
        y = VH - (lat - min_lat) / lat_range * VH
        return x, y

    def ring_to_d(ring):
        pts = [project(c[0], c[1]) for c in ring]
        d = f"M {pts[0][0]:.1f},{pts[0][1]:.1f}"
        for px, py in pts[1:]:
            d += f" L {px:.1f},{py:.1f}"
        d += " Z"
        return d

    results = []
    for feat in features:
        name = feat["properties"].get("NAME_2") or "?"
        geom = feat["geometry"]

        if geom["type"] == "Polygon":
            d = " ".join(ring_to_d(r) for r in geom["coordinates"])
        else:
            d = " ".join(
                ring_to_d(r) for poly in geom["coordinates"] for r in poly
            )

        # Improved centroid over all rings
        all_ring_pts = []
        if geom["type"] == "Polygon":
            for ring in geom["coordinates"]:
                all_ring_pts.extend(ring)
        else:
            for poly in geom["coordinates"]:
                for ring in poly:
                    all_ring_pts.extend(ring)

        if not all_ring_pts:
            continue

        cx = sum(c[0] for c in all_ring_pts) / len(all_ring_pts)
        cy = sum(c[1] for c in all_ring_pts) / len(all_ring_pts)
        px, py = project(cx, cy)

        lga_id = (
            name.lower()
            .replace(" ", "-")
            .replace("/", "-")
            .replace("'", "")
            .replace("(", "")
            .replace(")", "")
        )

        results.append(
            {
                "id": lga_id,
                "name": name,
                "d": d,
                "cx": round(px, 1),
                "cy": round(py, 1),
            }
        )

    return {"viewbox": f"0 0 {VW} {VH}", "lgas": results}


print("🗺️  Processing all states...")
processed = {}
for state_name, feats in state_features.items():
    result = process_state(feats)
    if result:
        processed[state_name.lower()] = result

Path("data").mkdir(exist_ok=True)
output = {
    "states": processed,
    "total_states": len(processed),
    "total_lgas": sum(len(s["lgas"]) for s in processed.values()),
}

with open("data/nigeria-lgas.json", "w", encoding="utf-8") as f:
    json.dump(output, f, separators=(",", ":"), ensure_ascii=False)

print(
    f"✅ Generated data/nigeria-lgas.json — "
    f"{len(processed)} states, "
    f"{output['total_lgas']} LGAs"
)