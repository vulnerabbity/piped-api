import { User } from "../models/User"
import { PipedFetcher } from "./PipedFetcher"

export interface FetchChannelProps {
  userId: string

  /**
   * Encoded string you can get from basic fetchChannel
   */
  nextpage?: string
}

export class ChannelFetcher extends PipedFetcher {
  protected channelEndpoint = this.baseUrl + "/channel"
  protected nextPageEndpoint = this.baseUrl + "/nextpage/channel"

  async fetchChannel(props: FetchChannelProps): Promise<User | null> {
    const { nextpage } = props

    const params = { nextpage }
    const url = this.getFetchChannelUrl(props)

    try {
      const response = await this.httpClient.get<User>(url, {
        params,
      })

      return response.data
    } catch (error) {
      console.error("Failed to fetch channel. " + error)
      return null
    }
  }

  protected getFetchChannelUrl({ userId, nextpage }: FetchChannelProps) {
    let endpoint = this.channelEndpoint

    if (nextpage) {
      // next page requests should be on different route
      endpoint = this.nextPageEndpoint
    }

    const url = `${endpoint}/${userId}`

    return url
  }
}
