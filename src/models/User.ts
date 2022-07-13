import { Video } from "./Video"

export interface User {
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
   * Encoded string to get next page of content
   */
  nextpage: string

  relatedStreams: Video[]

  subscriberCount: number

  verified: boolean
}
