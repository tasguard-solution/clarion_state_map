"""
geo.py
-----------
Downloads Nigeria states and LGA GeoJSON files and generates:
  - data/nigeria/states.json          → All states (for national view)
  - data/geo/{state-slug}.json        → LGAs for each state

Usage:
  python geo.py              # generate missing files (resume support)
  python geo.py --force      # regenerate everything
"""

import argparse
import json
import math
import sys
from collections import defaultdict
from pathlib import Path
import urllib.request

# ---------------------------------------------------------------------------
# Args
# ---------------------------------------------------------------------------
parser = argparse.ArgumentParser()
parser.add_argument("--force", action="store_true", help="Overwrite existing files")
args = parser.parse_args()

# ---------------------------------------------------------------------------
# Paths & URLs
# ---------------------------------------------------------------------------
BASE_DATA_DIR = Path("../data")
GEO_DIR = BASE_DATA_DIR / "geo"
NIGERIA_DIR = BASE_DATA_DIR / "nigeria"

GEO_DIR.mkdir(parents=True, exist_ok=True)
NIGERIA_DIR.mkdir(parents=True, exist_ok=True)

CACHE = Path("../data/geo/_geojson_cache.json")

URL = "https://raw.githubusercontent.com/qedsoftware/geojson_data/master/"
STATE_URL = URL + "nigeria-states.geojson"
LGA_URL = URL + "nigeria-lga.geojson"

# ---------------------------------------------------------------------------
# Fetch GeoJSON with cache
# ---------------------------------------------------------------------------
if CACHE.exists() and not args.force:
    print("📦 Using cached GeoJSON …")
    raw_data = CACHE.read_text(encoding="utf-8")
    data = json.loads(raw_data)
else:
    print("⬇️ Fetching Nigeria LGA GeoJSON …")
    with urllib.request.urlopen(LGA_URL, timeout=30) as r:
        raw = r.read()
    data = json.loads(raw)
    CACHE.write_text(json.dumps(data), encoding="utf-8")
    print(f"✅ Loaded {len(data['features'])} LGA features — cached")

# ---------------------------------------------------------------------------
# Group LGAs by their parent state (NAME_1)
# ---------------------------------------------------------------------------
lga_by_state: dict = defaultdict(list)
for feat in data["features"]:
    state_name = (feat.get("properties", {}).get("NAME_1") or "").strip().title()
    if state_name:
        lga_by_state[state_name].append(feat)

# ---------------------------------------------------------------------------
# Fetch States GeoJSON (for national level)
# ---------------------------------------------------------------------------
print("⬇️ Fetching Nigeria States GeoJSON …")
with urllib.request.urlopen(STATE_URL, timeout=30) as r:
    states_raw = r.read()
states_data = json.loads(states_raw)
print(f"✅ Loaded {len(states_data['features'])} state features")

# ---------------------------------------------------------------------------
# Projection + SVG conversion helper (shared)
# ---------------------------------------------------------------------------
def process_features(features, name_key: str = "NAME_2"):
    """Convert GeoJSON features to simplified SVG paths + centroids."""
    if not features:
        return None

    # --- Bounding box & simple projection ---
    all_coords = []
    for feat in features:
        geom = feat["geometry"]
        if geom["type"] == "Polygon":
            rings = geom["coordinates"]
        else:  # MultiPolygon
            rings = [r for poly in geom["coordinates"] for r in poly]
        for ring in rings:
            all_coords.extend(ring)

    if not all_coords:
        return None

    min_lng, max_lng = min(c[0] for c in all_coords), max(c[0] for c in all_coords)
    min_lat, max_lat = min(c[1] for c in all_coords), max(c[1] for c in all_coords)

    lat_mid = (min_lat + max_lat) / 2.0

    def geo_to_xy(lng, lat):
        return lng * math.cos(math.radians(lat_mid)), lat

    proj_coords = [geo_to_xy(c[0], c[1]) for c in all_coords]
    min_x = min(c[0] for c in proj_coords)
    max_x = max(c[0] for c in proj_coords)
    min_y = min(c[1] for c in proj_coords)
    max_y = max(c[1] for c in proj_coords)

    px_range = max_x - min_x
    py_range = max_y - min_y

    VW = 1000
    scale = VW / px_range if px_range > 0 else 1
    VH = round(py_range * scale)

    def project(lng, lat):
        x, y = geo_to_xy(lng, lat)
        return (x - min_x) * scale, VH - (y - min_y) * scale

    def ring_to_d(ring):
        if not ring:
            return ""
        pts = [project(c[0], c[1]) for c in ring]
        d = f"M {pts[0][0]:.1f},{pts[0][1]:.1f}"
        for px, py in pts[1:]:
            d += f" L {px:.1f},{py:.1f}"
        return d + " Z"

    # --- Build results ---
    results = []
    for feat in features:
        props = feat.get("properties", {})
        name = props.get(name_key) or "Unknown"

        geom = feat["geometry"]
        if geom["type"] == "Polygon":
            d = " ".join(ring_to_d(r) for r in geom["coordinates"])
        else:
            d = " ".join(ring_to_d(r) for poly in geom["coordinates"] for r in poly)

        # Centroid (simple average)
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

        raw_cx = sum(c[0] for c in all_ring_pts) / len(all_ring_pts)
        raw_cy = sum(c[1] for c in all_ring_pts) / len(all_ring_pts)
        px, py = project(raw_cx, raw_cy)

        item_id = (
            name.lower()
            .replace(" ", "-")
            .replace("/", "-")
            .replace("'", "")
            .replace("(", "")
            .replace(")", "")
        )

        results.append({
            "id": item_id,
            "name": name,
            "d": d,
            "cx": round(px, 1),
            "cy": round(py, 1)
        })

    return {
        "viewbox": f"0 0 {VW} {VH}",
        "features": results   # renamed from "lgas" for generality
    }


# ---------------------------------------------------------------------------
# 1. Generate per-state LGA files → data/geo/{slug}.json
# ---------------------------------------------------------------------------
print(f"\n🗺️ Processing {len(lga_by_state)} states (LGAs) …\n")

total = len(lga_by_state)
done = skipped = failed = 0

for i, (state_name, feats) in enumerate(sorted(lga_by_state.items()), 1):
    slug = state_name.lower().replace(" ", "-")
    out_path = GEO_DIR / f"{slug}.json"

    if out_path.exists() and not args.force:
        print(f"  ⏭  [{i:02}/{total}] {state_name} — already exists, skipping")
        skipped += 1
        continue

    try:
        result = process_features(feats, name_key="NAME_2")   # NAME_2 = LGA name
        if not result:
            print(f"  ⚠️  [{i:02}/{total}] {state_name} — no data")
            failed += 1
            continue

        out_path.write_text(
            json.dumps(result, separators=(",", ":"), ensure_ascii=False),
            encoding="utf-8"
        )
        print(f"  ✅  [{i:02}/{total}] {state_name} — {len(result['features'])} LGAs → {out_path}")
        done += 1

    except Exception as exc:
        print(f"  ❌  [{i:02}/{total}] {state_name} — ERROR: {exc}", file=sys.stderr)
        failed += 1

# ---------------------------------------------------------------------------
# 2. Generate national states file → data/nigeria/states.json
# ---------------------------------------------------------------------------
print(f"\n🇳🇬 Generating national states view …")

nation_result = process_features(states_data["features"], name_key="NAME_1")  # NAME_1 = State name

if nation_result:
    nation_path = NIGERIA_DIR / "states.json"
    nation_path.write_text(
        json.dumps(nation_result, separators=(",", ":"), ensure_ascii=False),
        encoding="utf-8"
    )
    print(f"  ✅ National view saved → {nation_path} ({len(nation_result['features'])} states)")
else:
    print("  ❌ Failed to generate national states view")

print(f"\n🎉 Finished! Generated: {done} state LGA files | Skipped: {skipped} | Failed: {failed}")