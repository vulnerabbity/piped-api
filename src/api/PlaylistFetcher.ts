import { DetailedPlaylist, DetailedPlaylistNextPage } from "../models/DetailedPlaylist"
import { PipedFetcher } from "./PipedFetcher"

export interface FetchPlaylistProps {
  playlistId: string
}

export interface FetchPlaylistNextPageProps extends FetchPlaylistProps {
  nextpage: string
}

export class PlaylistFetcher extends PipedFetcher {
  private playlistsEndpoint = this.baseUrl + "/playlists"
  private playlistsNexpageEndpoint = this.baseUrl + "/nextpage/playlists"

  async fetchPlaylist(props: FetchPlaylistProps) {
    const { playlistId } = props

    const url = `${this.playlistsEndpoint}/${playlistId}`

    try {
      const response = await this.httpClient.get<DetailedPlaylist>(url)

      return response.data
    } catch (error) {
      console.error(`Failed to fetch playlist "${playlistId}". ${error}`)

      return null
    }
  }

  async fetchPlaylistNextPage(props: FetchPlaylistNextPageProps) {
    const { nextpage, playlistId } = props
    const url = `${this.playlistsNexpageEndpoint}/${playlistId}`

    const params = { nextpage }

    try {
      const response = await this.httpClient.get<DetailedPlaylistNextPage>(url, { params })

      return response.data
    } catch (error) {
      console.error(`Failed fetch next page of playlist "${playlistId}". ${error}`)

      return null
    }
  }
}
