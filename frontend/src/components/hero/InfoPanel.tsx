import "./InfoPanel.css";
import { type StateId, STATE_ZONES } from "../../data/nigeria";
import { STATE_INFO } from "../../data/stateHints";
import { type Feature } from "../../data/nigeria";
import CustomButton from "../CustomButton";
import StateCard from "./StateCard";

type InfoPanelProps = {
  feature: Feature | null;
};

const STAT_TYPES = [
  { key: "population", label: "Population", unit: "people" },
  { key: "gdp", label: "GDP", unit: "USD" },
  { key: "fertility", label: "Fertility", unit: "children/woman" },
] as const;

type StatKey = (typeof STAT_TYPES)[number]["key"];

export default function InfoPanel({ feature }: InfoPanelProps) {
  const stateInfo = feature ? STATE_INFO[feature.id as StateId] : null;

  const hintText = stateInfo?.hint
    ? stateInfo.hint
    : feature
      ? `More data for ${feature.name} (election, population, flight info, etc.) coming soon...`
      : "Click any state on the map to see its details here.";

  return (
    <div className="infoPanel">
      {feature && (
        <div className="info-state">
          <p className="infoState-label">State Spotlight</p>
          <div className="state-detail">
            <div className="infoPanelInner">
              <p className="infoZone">
                {STATE_ZONES[feature.id]?.replace(/-/g, " ").toUpperCase() ??
                  "NIGERIA"}{" "}
                Zone
              </p>
              <h2 className="infoName">{feature.name}</h2>
            </div>
            <div className="state-detail-button">
              <CustomButton text={"Open " + feature.name}></CustomButton>
            </div>
          </div>

          {/* State Stats Cards */}
          <div className="state-stats-panel">
            {STAT_TYPES.map(({ key, label, unit }) => (
              <StateCard
                key={key}
                article={stateInfo || {}}
                displayType={key as StatKey}
                label={label}
                unit={unit}
              />
            ))}
          </div>
        </div>
      )}

      <p className="infoHint">{hintText}</p>
    </div>
  );
}
