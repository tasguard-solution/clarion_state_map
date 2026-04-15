// src/components/map-view/NigeriaMap.tsx
import {
  type StateId,
  type Feature,
  getStateColor,
} from "../../../data/nigeria";

import "./NigeriaMap.css";

type NigeriaMapProps = {
  features: Feature[];
  hoveredState: StateId | null;
  selectedState: StateId | null;
  viewbox: string;
  onHover: (id: StateId | null) => void;
  onSelect: (id: StateId) => void;
  onBackgroundClick: () => void;
};

export default function NigeriaMap({
  features,
  hoveredState,
  selectedState,
  viewbox,
  onHover,
  onSelect,
  onBackgroundClick,
}: NigeriaMapProps) {
  return (
    <div className="mapwrapper">
      <svg
        viewBox={viewbox}
        preserveAspectRatio="xMidYMid meet"
        onClick={onBackgroundClick}
      >
        {features.map((state) => {
          const isHovered = hoveredState === state.id;
          const isSelected = selectedState === state.id;
          const fill = getStateColor(state.id, isHovered, isSelected);

          return (
            <g key={state.id}>
              <path
                d={state.d}
                fill={fill}
                stroke="white"
                strokeWidth={isSelected ? 2 : 0.8}
                style={{
                  cursor: "pointer",
                  transition: "fill 0.15s ease",
                  filter: isSelected
                    ? `drop-shadow(0 0 8px ${fill})`
                    : undefined,
                }}
                onMouseEnter={() => onHover(state.id)}
                onMouseLeave={() => onHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(state.id);
                }}
              />

              {(isHovered || isSelected) && (
                <text
                  x={state.cx}
                  y={state.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="700"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  {state.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
