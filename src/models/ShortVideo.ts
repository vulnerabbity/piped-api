import { TestUtils } from "../utils/TestUtils"
import { Video } from "./Video"
import { expect } from "chai"

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

export function testShortVideos(videos: ShortVideo[]) {
  videos.forEach(video => testShortVideo(video))
}

export function testShortVideo(video: ShortVideo) {
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
  TestUtils.expectNull(shortDescription)
  TestUtils.expectString(thumbnail)
  TestUtils.expectString(title)
  TestUtils.expectNull(uploadedDate)
  TestUtils.expectNull(uploaderAvatar)
  TestUtils.expectString(uploaderName)
  TestUtils.expectString(uploaderUrl)
  TestUtils.expectBoolean(uploaderVerified)
  TestUtils.expectString(url)

  expect(uploaded).equal(-1)
  expect(views).equal(-1)
}
