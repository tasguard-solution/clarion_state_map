// src/components/hero/MapView.tsx
// Owns the map panel layout: shows Loading spinner while data isn't ready,
// renders NigeriaMap + Legend when data is available,
// and derives the active geo-zone from the selected state to highlight in Legend.

import NigeriaMap from "./map-view/NigeriaMap";
import "./MapView.css";
import Legend from "./map-view/Legend";
import Loading from "./map-view/Loading";

import { type StateId, type Feature, STATE_ZONES } from "../../data/nigeria";

type MapViewProps = {
  loading: boolean;
  features: Feature[];
  viewbox: string;
  hoveredState: StateId | null;
  selectedState: StateId | null;
  onHover: (id: StateId | null) => void;
  onSelect: (id: StateId) => void;
  onBackgroundClick: () => void;
};

export default function MapView({
  loading,
  features,
  viewbox,
  hoveredState,
  selectedState,
  onHover,
  onSelect,
  onBackgroundClick,
}: MapViewProps) {
  // Derive the active geo-zone from the selected state so Legend can highlight it
  const activeZone = selectedState ? STATE_ZONES[selectedState] : undefined;

  if (loading) {
    return (
      <div className="map-view">
        <Loading />
      </div>
    );
  }

  return (
    <div className="map-view">
      <NigeriaMap
        features={features}
        viewbox={viewbox}
        hoveredState={hoveredState}
        selectedState={selectedState}
        onHover={onHover}
        onSelect={onSelect}
        onBackgroundClick={onBackgroundClick}
      />
      <div style={{ justifySelf: "left" }}>
        <Legend activeZone={activeZone} />
      </div>
    </div>
  );
}
