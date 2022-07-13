import { AudioStream } from "./AudioStream"
import { Chapter } from "./Chapter"
import { SubtitlesItem } from "./Subtitles"
import { Video } from "./Video"
import { VideoStream } from "./VideoStream"

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
   * The date the video was uploaded
   *
   * Example:
   * 2021-01-01
   */
  uploadedDate: string

  /**
   * Channel name
   */
  uploader: string

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
