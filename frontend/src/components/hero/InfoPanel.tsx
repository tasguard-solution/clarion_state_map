// src/components/hero/InfoPanel.tsx
// Permanent sidebar panel — always rendered, never pops in/out.
// When no state is selected: infoHint shows the default prompt.
// When a state is selected: shows the state card + state-specific hint.
// No close button — deselect by clicking the map background.

import "./InfoPanel.css";
import { type StateId, STATE_ZONES } from "../../data/nigeria";
import { STATE_HINTS } from "../../data/stateHints";
import { type Feature } from "../../data/nigeria";
import CustomButton from "../CustomButton";

type InfoPanelProps = {
  feature: Feature | null;
};

export default function InfoPanel({ feature }: InfoPanelProps) {
  const hintText = feature
    ? (STATE_HINTS[feature.id as StateId] ??
      `More data for ${feature.name} (election, population, flight info, etc.) coming soon...`)
    : "Click any state on the map to see its details here.";

  return (
    <div className="infoPanel">
      {feature && (
        <div className="infoState">
          <p className="infoState-label">State Spotlight</p>
          <div className="stateCard">
            <div className="infoPanelInner">
              <p className="infoZone">
                {STATE_ZONES[feature.id]?.replace(/-/g, " ").toUpperCase() ??
                  "NIGERIA"}{" "}
                Zone
              </p>
              <h2 className="infoName">{feature.name}</h2>
            </div>
            <div className="stateCardButton">
              <CustomButton text={"Open " + feature.name}></CustomButton>
            </div>
          </div>
        </div>
      )}

      <p className="infoHint">{hintText}</p>
    </div>
  );
}
