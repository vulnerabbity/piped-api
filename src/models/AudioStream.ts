export interface AudioStream {
  /**
   * Bitrate in bytes
   */
  bitrate: number

  /**
   * Codec of audio stream
   *
   * Example: mp4a.40.5
   */
  codec: string

  /**
   * Format of audio stream
   *
   * Example: M4A
   */
  format: string

  /**
   * File mime type
   *
   * Example: audio/mp4
   */
  mimeType: string

  /**
   * String describing bitrate
   *
   * Example: 48 kbps
   */
  quality: string

  /**
   * Absolute url to audio stream
   *
   * Example:
   * "https://pipedproxy-bom.kavin.rocks/videoplayback?..."
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
