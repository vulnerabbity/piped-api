import { Region } from "../models/Region";
import { API_DEFAULTS } from "./constants";
import { TrendsFetcher } from "./TrendsFetcher";

export interface PipedApiProps {
  pipedInstanceBaseUrl?: string;
  region?: Region;
}

export class PipedApi {
  readonly trends: TrendsFetcher;

  constructor(props: PipedApiProps = {}) {
    this.trends = new TrendsFetcher(props);
  }
}
