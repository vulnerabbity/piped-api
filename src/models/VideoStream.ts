export interface VideoStream {
  /**
   * Bitrate in bytes
   */
  bitrate: number

  /**
   * Codec of video stream
   *
   * Example: avc1.64002a
   */
  codec: string

  /**
   * Format of video
   *
   * Example: MPEG_4
   */
  format: string

  fps: number

  /**
   * Width in pixels
   */
  width: number

  /**
   * Height in pixels
   */
  height: number

  /**
   * Mime type of the video stream
   *
   * Example: "video/mp4"
   */
  mimeType: string

  /**
   * String representing video quality
   *
   * Example: "720p"
   */
  quality: string

  /**
   * Absolute stream url
   *
   * Example: "https://pipedproxy-bom.kavin.rocks/videoplayback?..."
   */
  url: string

  /**
   * Whether or not the stream is video only
   */
  videoOnly: boolean

  /**
   * Useful for creating dash streams
   */
  indexEnd: number

  /**
   * Useful for creating dash streams
   */
  indexStart: number

  /**
   * Useful for creating dash streams
   */
  initStart: number

  /**
   * Useful for creating dash streams
   */
  initEnd: number
}
