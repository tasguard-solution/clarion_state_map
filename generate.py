"""
generate.py
-----------
Downloads the Nigeria LGA GeoJSON and produces one JSON file per state
inside the data/ directory (e.g. data/lagos.json, data/kano.json …).

Resume support:
  If a state file already exists it is skipped, so you can run partially
  locally, commit the data/ files, and Railway will skip the done states
  and only generate the remaining ones.

Usage:
  python generate.py              # generate all missing states
  python generate.py --force      # regenerate everything from scratch
"""

import argparse
import json
import math
import sys
import urllib.request
from collections import defaultdict
from pathlib import Path

# ---------------------------------------------------------------------------
# Args
# ---------------------------------------------------------------------------
parser = argparse.ArgumentParser()
parser.add_argument("--force", action="store_true", help="Overwrite existing state files")
args = parser.parse_args()

# ---------------------------------------------------------------------------
# Fetch GeoJSON (with a local cache so re-runs are instant)
# ---------------------------------------------------------------------------
CACHE = Path("data/_geojson_cache.json")
URL = "https://raw.githubusercontent.com/qedsoftware/geojson_data/master/nigeria-lga.geojson"

Path("data").mkdir(exist_ok=True)

if CACHE.exists() and not args.force:
    print("📦  Using cached GeoJSON …")
    data = json.loads(CACHE.read_text())
else:
    print("⬇️  Fetching Nigeria LGA GeoJSON …")
    with urllib.request.urlopen(URL, timeout=30) as r:
        raw = r.read()
    data = json.loads(raw)
    CACHE.write_bytes(raw)
    print(f"✅  Loaded {len(data['features'])} features — cached to {CACHE}")

# ---------------------------------------------------------------------------
# Group features by state
# ---------------------------------------------------------------------------
state_features: dict = defaultdict(list)
for feat in data["features"]:
    state = (feat.get("properties", {}).get("NAME_1") or "").strip().title()
    if state:
        state_features[state].append(feat)

# ---------------------------------------------------------------------------
# Projection helpers
# ---------------------------------------------------------------------------

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
        pts = [project(c[0], c[1]) for c in ring]
        d = f"M {pts[0][0]:.1f},{pts[0][1]:.1f}"
        for px, py in pts[1:]:
            d += f" L {px:.1f},{py:.1f}"
        return d + " Z"

    results = []
    for feat in features:
        name = feat["properties"].get("NAME_2") or "?"
        geom = feat["geometry"]

        if geom["type"] == "Polygon":
            d = " ".join(ring_to_d(r) for r in geom["coordinates"])
        else:
            d = " ".join(ring_to_d(r) for poly in geom["coordinates"] for r in poly)

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

        lga_id = (
            name.lower()
            .replace(" ", "-")
            .replace("/", "-")
            .replace("'", "")
            .replace("(", "")
            .replace(")", "")
        )

        results.append({"id": lga_id, "name": name, "d": d, "cx": round(px, 1), "cy": round(py, 1)})

    return {"viewbox": f"0 0 {VW} {VH}", "lgas": results}


# ---------------------------------------------------------------------------
# Generate per-state files
# ---------------------------------------------------------------------------
total = len(state_features)
done = skipped = failed = 0

print(f"\n🗺️  Processing {total} states …\n")

for i, (state_name, feats) in enumerate(sorted(state_features.items()), 1):
    slug = state_name.lower().replace(" ", "-")
    out_path = Path(f"data/{slug}.json")

    if out_path.exists() and not args.force:
        print(f"  ⏭  [{i:02}/{total}] {state_name} — already exists, skipping")
        skipped += 1
        continue

    try:
        result = process_state(feats)
        if not result:
            print(f"  ⚠️  [{i:02}/{total}] {state_name} — no data", file=sys.stderr)
            failed += 1
            continue

        out_path.write_text(
            json.dumps(result, separators=(",", ":"), ensure_ascii=False),
            encoding="utf-8",
        )
        print(f"  ✅  [{i:02}/{total}] {state_name} — {len(result['lgas'])} LGAs → {out_path}")
        done += 1

    except Exception as exc:
        print(f"  ❌  [{i:02}/{total}] {state_name} — ERROR: {exc}", file=sys.stderr)
        failed += 1

print(f"\n🎉  Done — {done} generated, {skipped} skipped, {failed} failed")