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
