import { Region } from "../models/Region"
import { ChannelFetcher } from "./ChannelFetcher/ChannelFetcher"
import { CommentsFetcher } from "./CommentsFetcher/CommentsFetcher"
import { PlaylistFetcher } from "./PlaylistFetcher/PlaylistFetcher"
import { Searcher } from "./Searcher/Searcher"
import { SearchSuggester } from "./SearchSuggester/SearchSuggester"
import { TrendsFetcher } from "./TrendsFetcher/TrendsFetcher"
import { VideoFetcher } from "./VideoFetcher/VideoFetcher"

export interface PipedApiProps {
  pipedInstanceBaseUrl?: string
  region?: Region
}

export class PipedApi {
  readonly trends: TrendsFetcher
  readonly channel: ChannelFetcher
  readonly suggestions: SearchSuggester
  readonly video: VideoFetcher
  readonly comments: CommentsFetcher
  readonly search: Searcher
  readonly playlists: PlaylistFetcher

  constructor(props: PipedApiProps = {}) {
    this.trends = new TrendsFetcher(props)

    this.channel = new ChannelFetcher(props)

    this.suggestions = new SearchSuggester(props)

    this.video = new VideoFetcher(props)

    this.comments = new CommentsFetcher(props)

    this.search = new Searcher(props)

    this.playlists = new PlaylistFetcher(props)
  }
}
