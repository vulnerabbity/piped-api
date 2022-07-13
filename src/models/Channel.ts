export interface Channel {
  name: string

  /**
   * Absolute url to thumbnail
   */
  thumbnail: string

  /**
   * Relative url to channel
   */
  url: string

  description: string

  /**
   * Number of subscribers
   */
  subscribers: number

  /**
   * Number of videos
   */
  videos: number

  /**
   * Weather or not user is verified
   */
  verified: boolean
}
