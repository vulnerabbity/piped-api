import { TestUtils } from "../utils/TestUtils"

export interface Channel {
  name: string

  /**
   * Absolute url to thumbnail
   */
  thumbnail: string

  /**
   * Relative url to channel
   */
  url: string

  description: string | null

  /**
   * Number of subscribers
   */
  subscribers: number

  /**
   * Number of videos
   */
  videos: number

  /**
   * Weather or not user is verified
   */
  verified: boolean
}

export function testChannels(channels: Channel[]) {
  channels.forEach(channel => testChannel(channel))
}

export function testChannel(channel: Channel) {
  const { description, name, subscribers, thumbnail, url, verified, videos } = channel

  TestUtils.expectStringOrNull(description)
  TestUtils.expectString(name)
  TestUtils.expectNumber(subscribers)
  TestUtils.expectString(thumbnail)
  TestUtils.expectString(url)
  TestUtils.expectBoolean(verified)
  TestUtils.expectNumber(videos)
}
