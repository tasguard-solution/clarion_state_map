// src/components/map-view/MapView.tsx
import { useState, useEffect } from "react";
import "./MapView.css"; // or wherever you put the CSS

import NigeriaMap from "./map-view/NigeriaMap";
import InfoPanel from "./map-view/InfoPanel";
import Loading from "./map-view/Loading";
import Legend from "./map-view/Legend";

import { type StateId, type MapData, type Feature } from "../../data/nigeria";

export default function MapView() {
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [hoveredState, setHoveredState] = useState<StateId | null>(null);
  const [selectedState, setSelectedState] = useState<StateId | null>(null);

  useEffect(() => {
    fetch("/states.json") // ← Recommended path
      .then((r) => r.json())
      .then((data: MapData) => setMapData(data))
      .catch((err) => console.error("Failed to load map data:", err));
  }, []);

  if (!mapData) {
    return <Loading />;
  }

  const { viewbox, features } = mapData;
  const selectedFeature = features.find((f) => f.id === selectedState);

  return (
    <div id="map-view">
      <NigeriaMap
        features={features}
        hoveredState={hoveredState}
        selectedState={selectedState}
        viewbox={viewbox}
        onHover={setHoveredState}
        onSelect={setSelectedState}
        onBackgroundClick={() => setSelectedState(null)}
      />

      {selectedFeature && (
        <InfoPanel
          feature={selectedFeature}
          onClose={() => setSelectedState(null)}
        />
      )}

      {!selectedFeature && (
        <div className="hint">Click any state for details</div>
      )}

      <Legend />
    </div>
  );
}
