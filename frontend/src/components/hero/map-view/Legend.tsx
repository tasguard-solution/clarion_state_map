// src/components/hero/map-view/Legend.tsx
// Shows the color-coded geo-zone key.
// activeZone (optional): when set, highlights the matching zone label.

import { REGION_COLORS } from "../../../data/nigeria";
import "./Legend.css";

type LegendProps = {
  activeZone?: string;
};

function Legend({ activeZone }: LegendProps) {
  return (
    <div className="legend">
      {Object.entries(REGION_COLORS).map(([zone, color]) => {
        const isActive = activeZone === zone;
        return (
          <div
            key={zone}
            className={`legendItem${isActive ? " legendItem--active" : ""}`}
          >
            <span
              className="legendDot"
              style={{
                background: color,
                boxShadow: isActive ? `0 0 6px 2px ${color}` : undefined,
              }}
            />
            <span className="legendLabel">
              {zone.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Legend;
