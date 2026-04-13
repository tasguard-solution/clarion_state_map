import { useState } from "react";
import { useMapData } from "../hooks/useMapData";
import MapView from "../components/hero/MapView";
import InfoPanel from "../components/hero/InfoPanel";
import { type StateId } from "../data/nigeria";
import "./MapPage.css";

function MapPage() {
  const mapData = useMapData();
  const [hoveredState, setHoveredState] = useState<StateId | null>(null);
  const [selectedState, setSelectedState] = useState<StateId | null>(null);

  const selectedFeature =
    mapData?.features.find((f) => f.id === selectedState) ?? null;

  return (
    <main id="map-page">
      <div className="map-page-layout">
        <MapView
          loading={!mapData}
          features={mapData?.features ?? []}
          viewbox={mapData?.viewbox ?? ""}
          hoveredState={hoveredState}
          selectedState={selectedState}
          onHover={setHoveredState}
          onSelect={setSelectedState}
          onBackgroundClick={() => setSelectedState(null)}
        />

        <aside className="map-page-sidebar">
          <InfoPanel feature={selectedFeature} />
        </aside>
      </div>
    </main>
  );
}

export default MapPage;
