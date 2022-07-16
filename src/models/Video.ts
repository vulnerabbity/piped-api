import { TestUtils } from "../utils/TestUtils"

export interface Video {
  title: string

  shortDescription: string | null

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
   * Milliseconds since 1970 to video upload time
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
  uploaderAvatar: string | null

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

export function testVideos(videos: Video[]) {
  for (let video of videos) {
    testVideo(video)
  }
}

export function testVideo(video: Video) {
  const {
    duration,
    shortDescription,
    thumbnail,
    title,
    uploaded,
    uploadedDate,
    uploaderAvatar,
    uploaderName,
    uploaderUrl,
    uploaderVerified,
    url,
    views,
  } = video

  TestUtils.expectNumber(duration)
  TestUtils.expectStringOrNull(shortDescription)
  TestUtils.expectString(thumbnail)
  TestUtils.expectString(title)
  TestUtils.expectNumber(uploaded)
  TestUtils.expectStringOrNull(uploaderAvatar)
  TestUtils.expectString(uploaderName)
  TestUtils.expectBoolean(uploaderVerified)
  TestUtils.expectStringOrNull(uploadedDate)
  TestUtils.expectString(uploaderUrl)
  TestUtils.expectString(url)
  TestUtils.expectNumber(views)
}
