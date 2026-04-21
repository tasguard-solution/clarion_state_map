// src/components/explore/LGAMap.tsx
// Renders the SVG LGA map for a given state using the geo/[state].json data.
// Colours each LGA by the winning party.

import { useState } from "react";
import lagosGeo from "../../data/geo/lagos.json";
import { ELECTION_BY_LGA, PARTY_COLORS } from "../../data/lagosElection";
import "./LGAMap.css";

type LGAFeature = {
  id: string;
  name: string;
  d: string;
  cx: number;
  cy: number;
};

type LGAMapProps = {
  selectedLGA: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
};

export default function LGAMap({ selectedLGA, onSelect, onHover }: LGAMapProps) {
  const [hoveredLGA, setHoveredLGA] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredLGA(id);
    onHover(id);
  };

  const handleMouseLeave = () => {
    setHoveredLGA(null);
    onHover(null);
  };

  // Party colour for each LGA based on 2023 election winner
  function getFill(lgaId: string): string {
    const result = ELECTION_BY_LGA[lgaId];
    if (!result) return "#ccc";
    return PARTY_COLORS[result.winner];
  }

  const features = lagosGeo.lgas as LGAFeature[];
  const viewBox = lagosGeo.viewbox;

  return (
    <div className="lga-map-wrapper">
      <p className="lga-map-label">Lagos State — 2023 Presidential Election</p>

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
