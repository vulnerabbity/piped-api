export interface Video {
  title: string

  shortDescription: string

  views: number

  /**
   * Duration in seconds
   *
   * Important: -1 for streams
   */
  duration: number

  /**
   * Absolute path to image
   *
   * Example:
   * "https://domain/image"
   */
  thumbnail: string

  uploaderName: string

  /**
   * Milliseconds since video uploaded.
   *
   * Important: -1 for streams
   */
  uploaded: number

  /**
   * String contain information how long ago video was uploaded
   *
   * Important: Null for streams
   *
   * Example: "12 hours ago"
   */
  uploadedDate: string | null

  /**
   * Absolute path to image
   *
   * Example:
   * "https://domain/image"
   */
  uploaderAvatar: string

  /**
   * Relative link to channel
   *
   * Example:
   * "/channel/..."
   */
  uploaderUrl: string

  /**
   * Relative link to video
   *
   * Example:
   * /watch?v=dQw4w9WgXcQ
   */
  url: string

  uploaderVerified: boolean
}
