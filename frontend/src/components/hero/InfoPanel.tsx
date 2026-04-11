// src/components/map-view/InfoPanel.tsx
import "./Infopanel.css";
import { type StateId, STATE_ZONES } from "../../data/nigeria";
import { type Feature } from "../../data/nigeria";

type InfoPanelProps = {
  feature: Feature;
  onClose: () => void;
};

export default function InfoPanel({ feature, onClose }: InfoPanelProps) {
  return (
    <div className="infoPanel">
      <div className="infoPanelInner">
        <p className="infoZone">
          {STATE_ZONES[feature.id]?.replace("-", " ").toUpperCase() ??
            "NIGERIA"}{" "}
          State
        </p>
        <h2 className="infoName">{feature.name}</h2>
        <button className="closeBtn" onClick={onClose}>
          ✕
        </button>
      </div>
      <p className="infoHint">
        Will add data here later on — election, population, lol flight data sef.
      </p>
    </div>
  );
}
