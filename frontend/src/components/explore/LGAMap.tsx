import { useState, useEffect } from "react";
import { PARTY_COLORS, getElectionByLGA, type Party } from "../../data/electionData";
import { HISTORICAL_DATA } from "../../data/historicalData";
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
  year: string;
  selectedLGA: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
};

export default function LGAMap({ stateId, year, selectedLGA, onSelect, onHover }: LGAMapProps) {
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    import(`../../data/geo/${stateId}.json`)
      .then((m) => {
        setGeoData(m.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load geojson for %s:", stateId, err);
        setLoading(false);
      });
  }, [stateId]);

  // Archive winner for the state
  const archiveWinner = HISTORICAL_DATA[year]?.[stateId]?.winner;

  function getFill(lgaId: string): string {
    if (year === "2023") {
      const electionLookup = getElectionByLGA(stateId);
      const result = electionLookup[lgaId];
      if (!result) return "#ccc";
      return PARTY_COLORS[result.winner] || "#999";
    }

    // Archive mode: color by state winner
    if (!archiveWinner) return "#eee";
    return PARTY_COLORS[archiveWinner as Party] || "#666";
  }

  const handleMouseEnter = (id: string) => {
    // Only hover info if in 2023
    if (year === "2023") onHover(id);
  };

  const handleMouseLeave = () => {
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
      <p className="lga-map-label">{stateName} — {year} Presidential Election</p>

      <svg
        className="lga-map-svg"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {features.map((lga) => (
          <path
            key={lga.id}
            d={lga.d}
            className={`lga-path${selectedLGA === lga.id ? " selected" : ""}${year !== "2023" ? " archive-path" : ""}`}
            fill={getFill(lga.id)}
            onClick={() => year === "2023" && onSelect(lga.id)}
            onMouseEnter={() => handleMouseEnter(lga.id)}
            onMouseLeave={handleMouseLeave}
          >
            <title>{lga.name}</title>
          </path>
        ))}
      </svg>

      {/* Party legend - only relevant for 2023 or winners */}
      <div className="lga-legend">
        {year === "2023" ? (
          (["APC", "LP", "PDP", "NNPP"] as const).map((party) => (
            <div key={party} className="lga-legend-item">
              <div className="lga-legend-swatch" style={{ background: PARTY_COLORS[party] }} />
              {party}
            </div>
          ))
        ) : (
          archiveWinner && (
            <div className="lga-legend-item">
              <div className="lga-legend-swatch" style={{ background: PARTY_COLORS[archiveWinner as Party] || "#666" }} />
              {archiveWinner} (State Winner)
            </div>
          )
        )}
      </div>
    </div>
  );
}
