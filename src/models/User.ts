import { Video } from "./Video"

export interface Channel {
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

export type ChannelNextPage = Pick<Channel, "nextpage" | "relatedStreams">
