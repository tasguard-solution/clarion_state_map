// src/components/explore/LGAMap.tsx
// Renders the SVG LGA map for a given state using the geo/[state].json data.
// Colours each LGA by the winning party.

import { useState, useEffect } from "react";
import { ELECTION_DATA, PARTY_COLORS, getElectionByLGA } from "../../data/electionData";
import "./LGAMap.css";

type LGAFeature = {
  id: string;
  name: string;
  d: string;
  cx: number;
  cy: number;
};

type LGAMapProps = {
  stateId: string;
  selectedLGA: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
};

export default function LGAMap({ stateId, selectedLGA, onSelect, onHover }: LGAMapProps) {
  const [hoveredLGA, setHoveredLGA] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Dynamic import for the specific state GeoJSON
    // Vite handles this by looking in the src/data/geo directory
    import(`../../data/geo/${stateId}.json`)
      .then((m) => {
        setGeoData(m.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Failed to load geojson for ${stateId}:`, err);
        setLoading(false);
      });
  }, [stateId]);

  // Party colour for each LGA based on 2023 election winner
  function getFill(lgaId: string): string {
    const electionLookup = getElectionByLGA(stateId);
    const result = electionLookup[lgaId];
    if (!result) return "#ccc";
    return PARTY_COLORS[result.winner];
  }

  const handleMouseEnter = (id: string) => {
    setHoveredLGA(id);
    onHover(id);
  };

  const handleMouseLeave = () => {
    setHoveredLGA(null);
    onHover(null);
  };

  if (loading) {
    return <div className="lga-map-wrapper">Loading map...</div>;
  }

  if (!geoData) {
    return <div className="lga-map-wrapper">Map data for {stateId} not found.</div>;
  }

  const features = geoData.lgas as LGAFeature[];
  const viewBox = geoData.viewbox;

  const stateName = stateId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="lga-map-wrapper">
      <p className="lga-map-label">{stateName} — 2023 Presidential Election</p>

      <svg
        className="lga-map-svg"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {features.map((lga) => (
          <path
            key={lga.id}
            d={lga.d}
            className={`lga-path${selectedLGA === lga.id ? " selected" : ""}`}
            fill={getFill(lga.id)}
            onClick={() => onSelect(lga.id)}
            onMouseEnter={() => handleMouseEnter(lga.id)}
            onMouseLeave={handleMouseLeave}
          >
            <title>{lga.name}</title>
          </path>
        ))}
      </svg>

      {/* Party legend */}
      <div className="lga-legend">
        {(["APC", "LP", "PDP", "NNPP"] as const).map((party) => (
          <div key={party} className="lga-legend-item">
            <div
              className="lga-legend-swatch"
              style={{ background: PARTY_COLORS[party] }}
            />
            {party}
          </div>
        ))}
      </div>
    </div>
  );
}
