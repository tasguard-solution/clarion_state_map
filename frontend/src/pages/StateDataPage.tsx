import { useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LGAMap from "../components/explore/LGAMap";
import LGAInfoPanel from "../components/explore/LGAInfoPanel";
import { ELECTION_DATA } from "../data/electionData";
import { HISTORICAL_DATA, AVAILABLE_YEARS } from "../data/historicalData";
import { STATE_INFO } from "../data/stateHints";
import "./StateDataPage.css";

function formatStateName(id: string): string {
  return id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatCategory(id: string): string {
  return id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function StateDataPage() {
  const { stateId = "lagos", category = "election", year: urlYear } = useParams();
  const navigate = useNavigate();
  const selectedYear = urlYear || "2023";

  const [selectedLGA, setSelectedLGA] = useState<string | null>(null);

  const categoryName = formatCategory(category);

  // Get election results for the current state (2023)
  const stateResults2023 = useMemo(() => ELECTION_DATA[stateId] || [], [stateId]);

  // Sort LGAs alphabetically for sidebar list
  const lgaList = useMemo(() =>
    [...stateResults2023].sort((a, b) => a.lgaName.localeCompare(b.lgaName)),
    [stateResults2023]
  );

  // Time navigation
  const currentIndex = AVAILABLE_YEARS.indexOf(selectedYear);
  const handleNextYear = () => {
    // Navigate forvard in time (towards 2023)
    if (currentIndex < AVAILABLE_YEARS.length - 1) {
      const nextY = AVAILABLE_YEARS[currentIndex + 1];
      navigate(`/explore/${stateId}/${category}/${nextY}`);
    }
  };
  const handlePrevYear = () => {
    // Navigate backward in time (towards 1999)
    if (currentIndex > 0) {
      const prevY = AVAILABLE_YEARS[currentIndex - 1];
      navigate(`/explore/${stateId}/${category}/${prevY}`);
    }
  };

  const currentArchive = HISTORICAL_DATA[selectedYear]?.[stateId];
  const [stateMenuOpen, setStateMenuOpen] = useState(false);

  return (
    <div className="state-data-page">

      {/* ── Compact editorial header ── */}
      <div className="sdp-header">
        <div className="sdp-header-left">
          <Link to={`/explore/${stateId}`} className="sdp-breadcrumb">
            ← Back to Categories
          </Link>
          <div className="sdp-title-wrapper">
            <div className="state-dropdown-wrap">
              <button
                type="button"
                className="state-dropdown-trigger"
                onClick={() => setStateMenuOpen((v) => !v)}
              >
                {formatStateName(stateId)}
                <span className={`dropdown-caret ${stateMenuOpen ? "open" : ""}`}>
                  ▼
                </span>
              </button>

              {stateMenuOpen && (
                <div className="state-dropdown-menu">
                  {Object.keys(STATE_INFO).map((sid) => (
                    <button
                      key={sid}
                      type="button"
                      className={`state-option ${sid === stateId ? "active" : ""}`}
                      onClick={() => {
                        setStateMenuOpen(false);
                        navigate(`/explore/${sid}/${category}/${selectedYear}`);
                      }}
                    >
                      {formatStateName(sid)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <h1 className="sdp-title">
              <span>/</span> {categoryName}
            </h1>
          </div>
        </div>
        <div className="sdp-header-right">
          <span className="sdp-year-badge">{selectedYear} Campaign</span>
          <span className="sdp-category-tag">{selectedYear === "2023" ? "INEC LGA Data" : "Archive Data"}</span>
        </div>
      </div>

      {/* ── Three-column body ── */}
      <div className="sdp-body">

        {/* Left: LGA list (2023) or State Stats (Archive) */}
        <aside className="sdp-lga-sidebar">
          {selectedYear === "2023" ? (
            <>
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
            </>
          ) : (
            <div className="sdp-archive-vibe">
              <p className="sdp-sidebar-heading">Archive Overview</p>
              <div className="archive-stat-card">
                <p className="archive-stat-label">State Winner</p>
                <h2 className="archive-stat-value">{currentArchive?.winner || "No Data"}</h2>
                <p className="archive-stat-note">Granular LGA data is unavailable for {selectedYear} pre-eclispe cycle.</p>
              </div>

              {currentArchive?.votes && (
                <div className="archive-party-list">
                  {Object.entries(currentArchive.votes).sort((a, b) => b[1] - a[1]).map(([p, v]) => (
                    <div key={p} className="archive-party-row">
                      <span className="party-name">{p}</span>
                      <span className="party-votes">{v.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </aside>

        {/* Centre: LGA SVG Map with Time Arrows */}
        <div className="map-column">
          <button
            className="nav-arrow left"
            onClick={handleNextYear}
            disabled={currentIndex === AVAILABLE_YEARS.length - 1}
          >
            {"<"}
          </button>

          <LGAMap
            stateId={stateId}
            year={selectedYear}
            selectedLGA={selectedLGA}
            onSelect={(id) => setSelectedLGA((prev) => (prev === id ? null : id))}
            onHover={() => { }}
          />

          <button
            className="nav-arrow right"
            onClick={handlePrevYear}
            disabled={currentIndex === 0}
          >
            {">"}
          </button>
        </div>

        {/* Right: Election results info panel */}
        <LGAInfoPanel stateId={stateId} lgaId={selectedLGA} year={selectedYear} />

      </div>
    </div>
  );
}
