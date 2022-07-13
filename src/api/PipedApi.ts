import { Region } from "../models/Region"
import { ChannelFetcher } from "./ChannelFetcher"
import { SearchSuggester } from "./SearchSuggester"
import { TrendsFetcher } from "./TrendsFetcher"

export interface PipedApiProps {
  pipedInstanceBaseUrl?: string
  region?: Region
}

export class PipedApi {
  readonly trends: TrendsFetcher
  readonly channel: ChannelFetcher
  readonly searchSuggestions: SearchSuggester

  constructor(props: PipedApiProps = {}) {
    this.trends = new TrendsFetcher(props)
    this.channel = new ChannelFetcher(props)
    this.searchSuggestions = new SearchSuggester(props)
  }
}
