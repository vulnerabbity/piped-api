import { Channel } from "./Channel"
import { MusicType } from "./Music"
import { Playlist } from "./Playlist"
import { Video } from "./Video"

export type SearchItem = Video | Channel | Playlist | MusicType

export interface SearchResult<T extends SearchItem = SearchItem> {
  items: T[]

  /**
   * Encoded string to continue searching
   */
  nextpage: string | null

  /**
   * If typed incorrectly will be correction string
   *
   * Default is empty string or null
   *
   * Example:
   * rick astleyy -> rick astley
   */
  suggestion: string | null

  /**
   * If typed incorrectly will be true
   */
  corrected: boolean
}
