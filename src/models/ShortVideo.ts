import { Video } from "./Video"

/**
 * Same shape with video with some fields hardcoded
 */
export type ShortVideo = Omit<Video, "uploadedDate" | "uploaderAvatar" | "shortDescription"> & {
  readonly uploaderAvatar: null
  readonly uploadedDate: null
  readonly shortDescription: null
  readonly views: -1
  readonly uploaded: -1
  readonly uploaderVerified: boolean
}
