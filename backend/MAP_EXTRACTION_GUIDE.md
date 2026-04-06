# Nigeria State Maps SVG Extraction Guide

This document outlines the standard method used to extract map data from the Nigeria GeoJSON dataset and convert it into perfectly scaled, distortion-free SVGs for the web frontend.

## The Problem: Squashed Maps

Standard GeoJSON data gives coordinates in Longitude (X) and Latitude (Y). Simply mapping the Minimum & Maximum Longitude to a fixed width (e.g., 1000px) and the Minimum & Maximum Latitude to a fixed height causes **distortion** (the map looks "squashed"). 

This occurs for two reasons:
1. **The Aspect Ratio:** A degree of longitude does not equal the same distance as a degree of latitude, except at the equator.
2. **Independent Axis Scaling:** If you calculate the horizontal scale and vertical scale independently, the shape gets stretched to fill the bounding box, warping the true geographic shape.

## The Solution: Unified Equirectangular Projection

To map the coordinates correctly, we use a localized **Equirectangular Projection** with a **Unified Scale**.

### Step 1: Group and Filter
Download the GeoJSON and filter the dataset for the specific state using the `NAME_1` property. Group the polygons for all Local Government Areas (LGAs) inside that state.

### Step 2: Convert to Projected Coordinates
Calculate the average latitude (`lat_mid`) for the state. Then convert every GeoJSON `(lng, lat)` point into projected Cartesian coordinates `(x, y)`:
```python
# Convert to projected Cartesian space
x = lng * math.cos(math.radians(lat_mid))
y = lat
```
This formula squeezes the longitude inward based on how far the state is from the equator, maintaining its true geographic proportions.

### Step 3: Find Bounding Box and Calculate Unified Scale
Find the minimum and maximum `x` and `y` among the projected coordinates to get the precise physical coordinate bounding box (`px_range` and `py_range`).

Choose a fixed viewport width (e.g., `VW = 1000`).
Instead of scaling X and Y separately, we calculate a **single uniform scale factor**:
```python
scale = VW / px_range
VH = round(py_range * scale) # Calculate viewport height proportionally
```
The exact ViewBox for the SVG is now `0 0 1000 {VH}`.

### Step 4: Map Paths
Convert every polygon's `x` and `y` into the final pixel coordinates using the unified scale, making sure to flip the Y-axis (since SVG Y grows downwards, whereas latitude grows upwards):
```python
px = (x - min_x) * scale
py = VH - (y - min_y) * scale  # Flip the Y axis
```

### Final File Output Structure
From the extraction script, generate a localized `lagosLgas.ts` (or equivalent metadata file) that exports:
1. `VIEWBOX`: e.g. `'0 0 1000 482'`
2. `LAGOS_LGAS`: Array of objects containing `id`, `name`, `d` (the SVG path), and `cx/cy` (the visual centroid for placing text labels and dots).

The generated paths are then rendered directly inside an `<svg viewBox={VIEWBOX}>` tag in the React components.
