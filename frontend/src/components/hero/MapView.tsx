// src/components/hero/MapView.tsx
import NigeriaMap from "./map-view/NigeriaMap";
import Legend from "./map-view/Legend";
import Loading from "./map-view/Loading";

import { type StateId, type Feature, type MapData } from "../../data/nigeria";

type MapViewProps = {
  features: Feature[];
  viewbox: string;
  hoveredState: StateId | null;
  selectedState: StateId | null;
  onHover: (id: StateId | null) => void;
  onSelect: (id: StateId) => void;
  onBackgroundClick: () => void;
};

export default function MapView({
  features,
  viewbox,
  hoveredState,
  selectedState,
  onHover,
  onSelect,
  onBackgroundClick,
}: MapViewProps) {
  return (
    <div id="map-view">
      <NigeriaMap
        features={features}
        viewbox={viewbox}
        hoveredState={hoveredState}
        selectedState={selectedState}
        onHover={onHover}
        onSelect={onSelect}
        onBackgroundClick={onBackgroundClick}
      />

      <Legend />
    </div>
  );
}
