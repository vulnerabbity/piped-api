import { Region } from "../models/Region"
import { ChannelFetcher } from "./ChannelFetcher"
import { CommentsFetcher } from "./CommentsFetcher"
import { PlaylistFetcher } from "./PlaylistFetcher"
import { Searcher } from "./Searcher"
import { SearchSuggester } from "./SearchSuggester"
import { TrendsFetcher } from "./TrendsFetcher"
import { VideoFetcher } from "./VideoFetcher"

export interface PipedApiProps {
  pipedInstanceBaseUrl?: string
  region?: Region
}

export class PipedApi {
  readonly trends: TrendsFetcher
  readonly channel: ChannelFetcher
  readonly searchSuggestions: SearchSuggester
  readonly video: VideoFetcher
  readonly comments: CommentsFetcher
  readonly search: Searcher
  readonly playlists: PlaylistFetcher

  constructor(props: PipedApiProps = {}) {
    this.trends = new TrendsFetcher(props)

    this.channel = new ChannelFetcher(props)

    this.searchSuggestions = new SearchSuggester(props)

    this.video = new VideoFetcher(props)

    this.comments = new CommentsFetcher(props)

    this.search = new Searcher(props)

    this.playlists = new PlaylistFetcher(props)
  }
}
