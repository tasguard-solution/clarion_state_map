# Clarion State Map (GIS) 🗺️

**The geographic processing engine** for Clarion. This service translates complex GeoJSON data into optimized, interactive SVG paths for the frontend.

## 🧪 Process Overview
This service follows a "Generate Once, Use Everywhere" philosophy. It extracts specific states from a master GeoJSON file of Nigeria's 774 Local Government Areas (LGAs) and prepares them for the React `MapView`.

## 🏗️ Key Logic (`generate.py`)
The generator does several critical transformations:
1. **Filtering**: Separates features by their `NAME_1` (State) property.
2. **Mercator Correction**: Adjusts the longitude based on the state's center latitude (`math.cos(math.radians(lat_mid))`) to prevent stretching.
3. **Scaling**: Projects geographic coordinates onto a relative `1000xH` coordinate system.
4. **Simplification**: Produces high-performance SVG path strings (`d` attribute).
5. **Centroid Calculation**: Calculates a visual center for each LGA to place labels/tooltips.

## 🚀 Usage

### Generate All States
```bash
python generate.py
```
This will populate the `data/` folder with individual `.json` files (e.g., `lagos.json`, `kano.json`). If a file already exists, it is skipped (unless `--force` is used).

### Update the Frontend
Once generated, the JSON output can be directly imported into the React application's mapping components.

## 🔗 Internal Links
- [← Back to Root README](../README.md)
- [SVG Projection Details](./map_extraction_guide.md)
- [Data Directory](./data/)
