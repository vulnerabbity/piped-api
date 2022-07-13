import { Region } from "../models/Region";

export interface I_API_DEFAULTS {
  baseUrl: string;
  region: Region;
}

export const API_DEFAULTS: I_API_DEFAULTS = {
  baseUrl: "https://pipedapi.kavin.rocks",
  region: "US",
} as const;
