import { Video } from "../../models"
import { Channel } from "../../models/Channel"
import { MusicAlbum, MusicPlaylist, MusicSong, MusicVideo } from "../../models/Music"
import { Playlist } from "../../models/Playlist"
import { SearchItem, SearchResult } from "../../models/SearchResult"
import { PipedFetcher } from "../PipedFetcher"

const SearchFilters = [
  "all",
  "videos",
  "channels",
  "playlists",
  "music_songs",
  "music_videos",
  "music_albums",
  "music_playlists",
] as const

export type SearchFilter = typeof SearchFilters[number]

export interface SearcherBasicSearchProps {
  query: string
  nextpage?: string
}

export interface SearcherSearchWithFilterProps extends SearcherBasicSearchProps {
  filter: SearchFilter
}

export class Searcher extends PipedFetcher {
  protected searchUrl = this.baseUrl + "/search"
  protected searchNextPageUrl = this.baseUrl + "/nextpage/search"

  async searchAll(props: SearcherBasicSearchProps) {
    return await this.search({ ...props, filter: "all" })
  }

  async searchPlaylists(props: SearcherBasicSearchProps) {
    return await this.search<Playlist>({ ...props, filter: "playlists" })
  }

  async searchChannels(props: SearcherBasicSearchProps) {
    return await this.search<Channel>({ ...props, filter: "channels" })
  }

  async searchVideos(props: SearcherBasicSearchProps) {
    return await this.search<Video>({ ...props, filter: "videos" })
  }

  async searchMusicSongs(props: SearcherBasicSearchProps) {
    return await this.search<MusicSong>({ ...props, filter: "music_songs" })
  }

  async searchMusicVideos(props: SearcherBasicSearchProps) {
    return await this.search<MusicVideo>({ ...props, filter: "music_videos" })
  }

  async searchMusicAlbums(props: SearcherBasicSearchProps) {
    return await this.search<MusicAlbum>({ ...props, filter: "music_albums" })
  }

  async searchMusicPlaylists(props: SearcherBasicSearchProps) {
    return await this.search<MusicPlaylist>({ ...props, filter: "music_playlists" })
  }

  protected async search<T extends SearchItem = SearchItem>(props: SearcherSearchWithFilterProps) {
    let { query, filter, nextpage } = props

    filter = this.normalizeSearchFilter(filter)

    const params = { q: query, filter, nextpage }

    let url = this.searchUrl

    if (nextpage) {
      url = this.searchNextPageUrl
    }

    try {
      const response = await this.httpClient.get<SearchResult<T>>(url, { params })

      return response.data
    } catch (error) {
      console.error(`Failed to search with query "${query}" and filter "${filter}" . ${error}`)

      return null
    }
  }

  protected normalizeSearchFilter(filter: string): SearchFilter {
    const isValidSearchFilter = SearchFilters.includes(filter as any)

    if (isValidSearchFilter) {
      return filter as SearchFilter
    }

    console.error(`Warning: "${filter}" is not valid search filter. Valid are ${SearchFilters}`)

    return "all"
  }
}
