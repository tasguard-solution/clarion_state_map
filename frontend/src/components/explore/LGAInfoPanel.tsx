// src/components/explore/LGAInfoPanel.tsx
// Shows 2023 election results for a clicked Lagos LGA.
// Design mirrors the hero InfoPanel: dark header + stat rows below.

import { ELECTION_BY_LGA, PARTY_COLORS, type Party } from "../../data/lagosElection";
import "./LGAInfoPanel.css";

type LGAInfoPanelProps = {
  lgaId: string | null;
};

const PARTIES: { key: Party; label: string }[] = [
  { key: "APC",  label: "APC"  },
  { key: "LP",   label: "LP"   },
  { key: "PDP",  label: "PDP"  },
  { key: "NNPP", label: "NNPP" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-NG");
}

export default function LGAInfoPanel({ lgaId }: LGAInfoPanelProps) {
  const result = lgaId ? ELECTION_BY_LGA[lgaId] : null;

  return (
    <div className="lga-info-panel">

      {/* ── Dark editorial header ── */}
      <div className="lga-panel-header">
        {result ? (
          <>
            <p className="lga-panel-label">LGA Spotlight</p>
            <h2 className="lga-panel-name">{result.lgaName}</h2>
            <span
              className="lga-winner-badge"
              style={{ background: PARTY_COLORS[result.winner], color: "#000" }}
            >
              🏆 {result.winner} Won
            </span>
          </>
        ) : (
          <>
            <p className="lga-panel-label">Election Results</p>
            <h2 className="lga-panel-name">Lagos.</h2>
          </>
        )}
      </div>

      {/* ── Vote breakdown rows ── */}
      {result ? (
        <>
          <div className="lga-total-row">
            <span>Total Votes Cast</span>
            <span className="lga-total-count">{formatNumber(result.total)}</span>
          </div>

          <div className="lga-votes-section">
            {PARTIES.map(({ key, label }) => {
              const votes = result[key.toLowerCase() as "apc" | "lp" | "pdp" | "nnpp"];
              const pct = ((votes / result.total) * 100).toFixed(1);
              const isWinner = result.winner === key;
              return (
                <div key={key} className="lga-vote-row">
                  <div className="lga-vote-header">
                    <span
                      className="lga-party-name"
                      style={{ color: PARTY_COLORS[key] }}
                    >
                      {label}{isWinner ? " ✓" : ""}
                    </span>
                    <span className="lga-vote-count">{formatNumber(votes)}</span>
                  </div>
                  <div className="lga-vote-bar-track">
                    <div
                      className="lga-vote-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: PARTY_COLORS[key],
                      }}
                    />
                  </div>
                  <span className="lga-vote-pct">{pct}% of total votes</span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="lga-hint">
          Click any LGA on the map to see the 2023 presidential election results for that area.
        </p>
      )}
    </div>
  );
}
