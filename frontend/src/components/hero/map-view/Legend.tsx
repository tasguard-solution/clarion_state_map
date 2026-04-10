import { REGION_COLORS } from "../../../data/nigeria";
import "./Legend.css";

function Legend() {
  return (
    <div className="legend">
      {Object.entries(REGION_COLORS).map(([zone, color]) => (
        <div key={zone} className="legendItem">
          <span className="legendDot" style={{ background: color }} />
          <span className="legendLabel">
            {zone.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Legend;
