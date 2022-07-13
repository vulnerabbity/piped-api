import { Region } from "../models/Region"
import { ChannelFetcher } from "./ChannelFetcher"
import { TrendsFetcher } from "./TrendsFetcher"

export interface PipedApiProps {
  pipedInstanceBaseUrl?: string
  region?: Region
}

export class PipedApi {
  readonly trends: TrendsFetcher
  readonly channel: ChannelFetcher

  constructor(props: PipedApiProps = {}) {
    this.trends = new TrendsFetcher(props)
    this.channel = new ChannelFetcher(props)
  }
}
