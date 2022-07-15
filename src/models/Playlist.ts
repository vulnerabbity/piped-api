import { TestUtils } from "../utils/TestUtils"

export interface Playlist {
  name: string

  /**
   * Absolute path to thumbnail
   */
  thumbnail: string

  /**
   * Relative url to playlist
   *
   * Example:
   * /playlist?list=PAFJIawdawd34...
   */
  url: string

  uploaderName: string

  /**
   * Number of uploaded videos
   */
  videos: number
}

export function testPlaylists(playlists: Playlist[]) {
  playlists.forEach(playlist => testPlaylist(playlist))
}

export function testPlaylist(playlist: Playlist) {
  const { name, thumbnail, uploaderName, url, videos } = playlist

  TestUtils.expectString(name)
  TestUtils.expectString(thumbnail)
  TestUtils.expectString(uploaderName)
  TestUtils.expectString(url)
  TestUtils.expectNumber(videos)
}
