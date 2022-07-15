import { TestUtils } from "../utils/TestUtils"
import { testVideos, Video } from "./Video"

export interface DetailedChannel {
  id: string

  /**
   * Absolute path to image
   */
  avatarUrl: string

  /**
   * Absolute path to image
   */
  bannerUrl: string

  name: string

  description: string

  /**
   * Encoded string to get next page of content. null if no next page
   */
  nextpage: string | null

  relatedStreams: Video[]

  subscriberCount: number

  verified: boolean
}

export type DetailedChannelNextPage = Pick<DetailedChannel, "nextpage" | "relatedStreams">

export function testDetailedChannel(channel: DetailedChannel) {
  const {
    avatarUrl,
    bannerUrl,
    description,
    id,
    name,
    nextpage,
    relatedStreams,
    subscriberCount,
    verified,
  } = channel

  TestUtils.expectString(avatarUrl)
  TestUtils.expectString(bannerUrl)
  TestUtils.expectString(description)
  TestUtils.expectString(id)
  TestUtils.expectString(name)
  TestUtils.expectStringOrNull(nextpage)
  testVideos(relatedStreams)
  TestUtils.expectNumber(subscriberCount)
  TestUtils.expectBoolean(verified)
}

export function testDetailedChannelNextPage(nextPage: DetailedChannelNextPage) {
  const { nextpage, relatedStreams } = nextPage

  testVideos(relatedStreams)
  TestUtils.expectStringOrNull(nextpage)
}
