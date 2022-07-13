export interface Video {
  /**
   * Duration in seconds
   */
  duration: number

  /**
   * Absolute path to image
   *
   * Example:
   * "https://domain/image"
   */
  thumbnail: string

  title: string

  /**
   * String contain information how long ago video was uploaded
   *
   * Example: "12 hours ago"
   */
  uploadedDate: string

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

  views: number
}
