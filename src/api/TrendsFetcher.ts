import { Video } from "../models";
import { PipedFetcher } from "./PipedFetcher";

export class TrendsFetcher extends PipedFetcher {
  protected readonly trendsUrl = this.baseUrl + "/trending";

  async fetch(): Promise<Video | null> {
    try {
      const response = await this.httpClient.get<Video>(this.trendsUrl, {
        params: this.getRequestParams(),
      });

      return response.data;
    } catch {
      return null;
    }
  }

  protected getRequestParams() {
    return {
      region: this.region,
    };
  }
}
