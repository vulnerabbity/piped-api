import { TestUtils } from "../utils/TestUtils"
import { AudioStream, testAudioStream, testAudioStreams } from "./AudioStream"
import { Chapter, testChapters } from "./Chapter"
import { SubtitlesItem, testSubtitles } from "./Subtitles"
import { testVideos, Video } from "./Video"
import { testVideoStream, testVideoStreams, VideoStream } from "./VideoStream"

export interface DetailedVideo {
  title: string

  description: string

  likes: number

  dislikes: number

  views: number

  /**
   * Duration of video in seconds
   */
  duration: number

  /**
   * Absolute url of thumbnail
   */
  thumbnailUrl: string

  /**
   * Channel name
   */
  uploader: string

  /**
   * -1 if hidden
   */
  uploaderSubscriberCount: number

  /**
   * The date the video was uploaded
   *
   * Example:
   * 2021-01-01
   */
  uploadDate: string

  /**
   * Relative link to chanel
   *
   * Example: "/channel/..."
   */
  uploaderUrl: string

  uploaderVerified: boolean

  audioStreams: AudioStream[]

  videoStreams: VideoStream[]

  relatedStreams: Video[]

  subtitles: SubtitlesItem[]

  chapters: Chapter[]

  /**
   * The proxy url to be used for rewrites
   */
  // TODO: rename this doc line to more reasonable one
  proxyUrl: string

  /**
   * Whether or not the video is a livestream
   */
  livestream: boolean

  /**
   * The dash manifest URL, to be used if not null (for OTF streams)
   */
  dash: string | null

  /**
   * The hls manifest URL, to be used for Livestreams
   */
  hls: string | null
}

export function testDetailedVideo(video: DetailedVideo) {
  const {
    title,
    description,
    likes,
    dislikes,
    views,
    thumbnailUrl,
    proxyUrl,
    chapters,
    dash,
    duration,
    hls,
    livestream,
    relatedStreams,
    subtitles,
    audioStreams,
    videoStreams,
    // upload*
    uploader,
    uploaderUrl,
    uploaderVerified,
    uploadDate,
    uploaderSubscriberCount,
  } = video

  TestUtils.expectString(title)
  TestUtils.expectString(description)
  TestUtils.expectNumber(views)

  TestUtils.expectNumber(likes)
  TestUtils.expectNumber(dislikes)
  TestUtils.expectStringOrNull(dash)
  TestUtils.expectNumber(duration)
  TestUtils.expectStringOrNull(hls)
  TestUtils.expectBoolean(livestream)
  TestUtils.expectString(proxyUrl)
  TestUtils.expectString(thumbnailUrl)
  // upload*
  TestUtils.expectString(uploader)
  TestUtils.expectString(uploaderUrl)
  TestUtils.expectBoolean(uploaderVerified)
  TestUtils.expectString(uploadDate)
  TestUtils.expectNumber(uploaderSubscriberCount)

  testVideos(relatedStreams)
  testChapters(chapters)
  testSubtitles(subtitles)
  testAudioStreams(audioStreams)
  testVideoStreams(videoStreams)
}
