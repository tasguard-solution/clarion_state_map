// src/hooks/useMapData.ts
// Encapsulates fetching + storing the Nigeria GeoJSON map data.
// Hero (and any future page) just calls useMapData() — no fetch logic in components.

import { useState, useEffect } from "react";
import { type MapData } from "../data/nigeria";

export function useMapData() {
  const [mapData, setMapData] = useState<MapData | null>(null);

  useEffect(() => {
    fetch("/states.json")
      .then((r) => r.json())
      .then((data: MapData) => setMapData(data))
      .catch((err) => console.error("Failed to load map data:", err));
  }, []);

  return mapData;
}

export function useNeighborsData() {
  const [neighborsData, setNeighborsData] = useState<MapData | null>(null);

  useEffect(() => {
    fetch("/neighbors.json")
      .then((r) => r.json())
      .then((data: MapData) => setNeighborsData(data))
      .catch((err) => console.error("Failed to load neighbors data:", err));
  }, []);

  return neighborsData;
}
