// src/data/nigeria.ts

// Color palette for geopolitical zones
export const REGION_COLORS = {
  "north-west": "#3B8BD4",
  "north-east": "#1D9E75",
  "north-central": "#639922",
  "south-west": "#BA7517",
  "south-east": "#D85A30",
  "south-south": "#D4537E",
  FCT: "#7F77DD",
} as const;

export const REGION_KEYS = [
  "north-west",
  "north-east",
  "north-central",
  "south-west",
  "south-east",
  "south-south",
  "FCT",
] as const;

export type Region = (typeof REGION_KEYS)[number];

// State to zone mapping
export const STATE_ZONES = {
  kano: "north-west",
  kaduna: "north-west",
  katsina: "north-west",
  kebbi: "north-west",
  sokoto: "north-west",
  zamfara: "north-west",
  jigawa: "north-west",
  borno: "north-east",
  adamawa: "north-east",
  yobe: "north-east",
  gombe: "north-east",
  bauchi: "north-east",
  taraba: "north-east",
  niger: "north-central",
  kwara: "north-central",
  kogi: "north-central",
  benue: "north-central",
  plateau: "north-central",
  nassarawa: "north-central",
  lagos: "south-west",
  ogun: "south-west",
  oyo: "south-west",
  osun: "south-west",
  ondo: "south-west",
  ekiti: "south-west",
  enugu: "south-east",
  anambra: "south-east",
  imo: "south-east",
  abia: "south-east",
  ebonyi: "south-east",
  rivers: "south-south",
  delta: "south-south",
  edo: "south-south",
  "cross-river": "south-south",
  "akwa-ibom": "south-south",
  bayelsa: "south-south",
  "federal-capital-territory": "FCT",
} as const;

export type StateId = keyof typeof STATE_ZONES;

export type Feature = {
  id: StateId;
  name: string;
  d: string;
  cx: number;
  cy: number;
};

export type MapData = {
  viewbox: string;
  features: Feature[];
};

// Helper to get color with hover/selected states
export function getStateColor(
  id: StateId,
  isHovered: boolean,
  isSelected: boolean
): string {
  const zone = STATE_ZONES[id] ?? "FCT";
  const baseColor = REGION_COLORS[zone as Region];

  if (isSelected) return baseColor;
  if (isHovered) return baseColor + "cc";   // 80% opacity
  return baseColor + "55";                  // 33% opacity
}