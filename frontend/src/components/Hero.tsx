// src/components/Hero.tsx
import { useState, useEffect } from "react";

import "./Hero.css";
import MapView from "./hero/MapView";
import InfoPanel from "./hero/InfoPanel";
import terror from "../assets/terror.png";
import NewsReport from "./hero/NewsReport";

import { type StateId, type MapData, type Feature } from "../data/nigeria"; // adjust path if needed

function Hero() {
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [hoveredState, setHoveredState] = useState<StateId | null>(null);
  const [selectedState, setSelectedState] = useState<StateId | null>(null);

  // Fetch data once (only in Hero now)
  useEffect(() => {
    fetch("/states.json")
      .then((r) => r.json())
      .then((data: MapData) => setMapData(data))
      .catch((err) => console.error("Failed to load map data:", err));
  }, []);

  if (!mapData) {
    return <div className="loading">Loading map...</div>; // or your Loading component
  }

  const { viewbox, features } = mapData;
  const selectedFeature = features.find((f) => f.id === selectedState);

  return (
    <section id="hero">
      <div className="container">
        <NewsReport />
        {/* MapView now receives everything as props */}
        <MapView
          features={features}
          viewbox={viewbox}
          hoveredState={hoveredState}
          selectedState={selectedState}
          onHover={setHoveredState}
          onSelect={setSelectedState}
          onBackgroundClick={() => setSelectedState(null)}
        />

        {/* InfoPanel is now outside MapView and lives in Hero */}
        <section id="selection-overview">
          {selectedFeature && (
            <InfoPanel
              feature={selectedFeature}
              onClose={() => setSelectedState(null)}
            />
          )}

          {/* Optional hint when nothing is selected */}
          {!selectedFeature && (
            <div className="hint">Click any state on the map for details</div>
          )}
        </section>
      </div>
    </section>
  );
}

export default Hero;
