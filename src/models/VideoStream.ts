import { TestUtils } from "../utils/TestUtils"

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
  codec: string | null

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

export function testVideoStreams(streams: VideoStream[]) {
  streams.forEach(stream => testVideoStream(stream))
}

export function testVideoStream(stream: VideoStream) {
  const {
    bitrate,
    codec,
    format,
    fps,
    height,
    width,
    indexStart,
    indexEnd,
    initStart,
    initEnd,
    mimeType,
    quality,
    url,
    videoOnly,
  } = stream

  TestUtils.expectNumber(bitrate)
  TestUtils.expectStringOrNull(codec)
  TestUtils.expectString(format)
  TestUtils.expectNumber(fps)
  TestUtils.expectNumber(height)
  TestUtils.expectNumber(width)
  TestUtils.expectNumber(indexStart)
  TestUtils.expectNumber(indexEnd)
  TestUtils.expectNumber(initStart)
  TestUtils.expectNumber(initEnd)
  TestUtils.expectString(mimeType)
  TestUtils.expectString(quality)
  TestUtils.expectString(url)
  TestUtils.expectBoolean(videoOnly)
}
