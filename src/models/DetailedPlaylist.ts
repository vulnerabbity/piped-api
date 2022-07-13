import { ShortVideo } from "./ShortVideo"

export interface DetailedPlaylist {
  /**
   * Name of playlist
   */
  name: string

  /**
   * Absolute url to thumbnail
   */
  thumbnailUrl: string

  /**
   * String to get next page of playlist
   */
  nextpage: string | null

  /**
   * Name of uploader
   */
  uploader: string

  /**
   * Relative url to channel
   */
  uploaderUrl: string

  /**
   * Absolute url to avatar
   */
  uploaderAvatar: string

  /**
   * Number of videos in playlist
   */
  videos: number

  relatedStreams: ShortVideo[]
}

export interface DetailedPlaylistNextPage {
  nextpage: string | null

  relatedStreams: ShortVideo[]
}
