// src/pages/StateDataPage.tsx
// Route: /explore/:stateId/:category
// For "election" + "lagos": renders 3-column layout:
//   Left sidebar (LGA list) | Centre (SVG LGA map) | Right (election info panel)

import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import LGAMap from "../components/explore/LGAMap";
import LGAInfoPanel from "../components/explore/LGAInfoPanel";
import { ELECTION_DATA } from "../data/electionData";
import "./StateDataPage.css";

function formatStateName(id: string): string {
  return id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatCategory(id: string): string {
  return id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function StateDataPage() {
  const { stateId = "lagos", category = "election" } = useParams();
  const [selectedLGA, setSelectedLGA] = useState<string | null>(null);

  const stateName = formatStateName(stateId);
  const categoryName = formatCategory(category);

  // Get election results for the current state
  const stateResults = useMemo(() => ELECTION_DATA[stateId] || [], [stateId]);

  // Sort LGAs alphabetically for sidebar list
  const lgaList = useMemo(() => 
    [...stateResults].sort((a, b) => a.lgaName.localeCompare(b.lgaName)),
    [stateResults]
  );

  return (
    <div className="state-data-page">

      {/* ── Compact editorial header ── */}
      <div className="sdp-header">
        <div className="sdp-header-left">
          <Link to={`/explore/${stateId}`} className="sdp-breadcrumb">
            ← {stateName} Explorer
          </Link>
          <h1 className="sdp-title">
            {stateName} <span>·</span> {categoryName}
          </h1>
        </div>
        <span className="sdp-category-tag">2023 INEC Data</span>
      </div>

      {/* ── Three-column body ── */}
      <div className="sdp-body">

        {/* Left: LGA list (dark sidebar, mirrors NewsReport) */}
        <aside className="sdp-lga-sidebar">
          <p className="sdp-sidebar-heading">Local Governments</p>
          <div className="sdp-lga-list">
            {lgaList.map((lga) => (
              <div
                key={lga.lgaId}
                className={`sdp-lga-item${selectedLGA === lga.lgaId ? " active" : ""}`}
                onClick={() =>
                  setSelectedLGA((prev) => (prev === lga.lgaId ? null : lga.lgaId))
                }
              >
                <span className="sdp-lga-item-name">{lga.lgaName}</span>
                <span className="sdp-lga-item-winner">{lga.winner}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Centre: LGA SVG Map */}
        <LGAMap
          stateId={stateId}
          selectedLGA={selectedLGA}
          onSelect={(id) => setSelectedLGA((prev) => (prev === id ? null : id))}
          onHover={() => {}}
        />

        {/* Right: Election results info panel */}
        <LGAInfoPanel stateId={stateId} lgaId={selectedLGA} />

      </div>
    </div>
  );
}
