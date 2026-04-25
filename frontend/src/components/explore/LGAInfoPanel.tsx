import { PARTY_COLORS, type Party, getElectionByLGA } from "../../data/electionData";
import { HISTORICAL_DATA } from "../../data/historicalData";
import "./LGAInfoPanel.css";

type LGAInfoPanelProps = {
  stateId: string;
  lgaId: string | null;
  year?: string;
};

const PARTIES_2023: { key: Party; label: string }[] = [
  { key: "APC",  label: "APC"  },
  { key: "LP",   label: "LP"   },
  { key: "PDP",  label: "PDP"  },
  { key: "NNPP", label: "NNPP" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-NG");
}

export default function LGAInfoPanel({ stateId, lgaId, year = "2023" }: LGAInfoPanelProps) {
  const electionLookup = getElectionByLGA(stateId);
  const result = lgaId && year === "2023" ? electionLookup[lgaId] : null;
  const stateArchive = HISTORICAL_DATA[year]?.[stateId];

  const stateName = stateId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

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
            <p className="lga-panel-label">{year} Summary</p>
            <h2 className="lga-panel-name">{stateName}.</h2>
            {year !== "2023" && stateArchive && (
               <span
                className="lga-winner-badge"
                style={{ background: PARTY_COLORS[stateArchive.winner as Party] || "#666", color: "#000" }}
              >
                🏆 {stateArchive.winner} Sweep
              </span>
            )}
          </>
        )}
      </div>

      {/* ── Vote breakdown rows ── */}
      {year === "2023" ? (
        result ? (
          <>
            <div className="lga-total-row">
              <span>Total Votes Cast</span>
              <span className="lga-total-count">{formatNumber(result.total)}</span>
            </div>

            <div className="lga-votes-section">
              {PARTIES_2023.map(({ key, label }) => {
                const votes = result[key.toLowerCase() as "apc" | "lp" | "pdp" | "nnpp"];
                const pct = ((votes / result.total) * 100).toFixed(1);
                const isWinner = result.winner === key;
                return (
                  <div key={key} className="lga-vote-row">
                    <div className="lga-vote-header">
                      <span className="lga-party-name" style={{ color: PARTY_COLORS[key] }}>
                        {label}{isWinner ? " ✓" : ""}
                      </span>
                      <span className="lga-vote-count">{formatNumber(votes)}</span>
                    </div>
                    <div className="lga-vote-bar-track">
                      <div
                        className="lga-vote-bar-fill"
                        style={{ width: `${pct}%`, background: PARTY_COLORS[key] }}
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
        )
      ) : (
        <div className="archive-info-body">
           {stateArchive ? (
             <>
               <div className="lga-total-row">
                  <span>Statewide Votes</span>
                  <span className="lga-total-count">{formatNumber(stateArchive.total)}</span>
               </div>
               <div className="lga-votes-section">
                  {Object.entries(stateArchive.votes).sort((a,b) => b[1] - a[1]).map(([party, votes]) => {
                    const pct = ((votes / stateArchive.total) * 100).toFixed(1);
                    return (
                      <div key={party} className="lga-vote-row">
                        <div className="lga-vote-header">
                          <span className="lga-party-name" style={{ color: PARTY_COLORS[party as Party] || "#999" }}>
                            {party}
                          </span>
                          <span className="lga-vote-count">{formatNumber(votes)}</span>
                        </div>
                        <div className="lga-vote-bar-track">
                          <div
                            className="lga-vote-bar-fill"
                            style={{ width: `${pct}%`, background: PARTY_COLORS[party as Party] || "#999" }}
                          />
                        </div>
                        <span className="lga-vote-pct">{pct}% yield</span>
                      </div>
                    );
                  })}
               </div>
             </>
           ) : (
             <p className="lga-hint">Archive data for {year} in this region is currently being digitized.</p>
           )}
        </div>
      )}
    </div>
  );
}
