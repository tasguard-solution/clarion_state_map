// Auto-generated historical election data
export type HistoricalStateResult = {
  stateName: string;
  winner: string;
  votes: Record<string, number>;
  total: number;
};

export const HISTORICAL_DATA: Record<string, Record<string, HistoricalStateResult>> = {};

export const AVAILABLE_YEARS = ["1999", "2003", "2011", "2015", "2019", "2023"];
