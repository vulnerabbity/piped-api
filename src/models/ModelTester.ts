import { Video } from "./Video"
import { TestUtils } from "../utils/TestUtils"

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
  TestUtils.expectString(shortDescription)
  TestUtils.expectString(thumbnail)
  TestUtils.expectString(title)
  TestUtils.expectNumber(uploaded)
  TestUtils.expectString(uploaderAvatar)
  TestUtils.expectString(uploaderName)
  TestUtils.expectBoolean(uploaderVerified)
  TestUtils.expectStringOrNull(uploadedDate)
  TestUtils.expectString(uploaderUrl)
  TestUtils.expectString(url)
  TestUtils.expectNumber(views)
}
