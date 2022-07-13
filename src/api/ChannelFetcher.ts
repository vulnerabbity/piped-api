import { Channel, ChannelNextPage } from "../models/User"
import { PipedFetcher } from "./PipedFetcher"

export interface FetchChannelProps {
  userId: string
}

export interface FetchChannelNextPageProps extends FetchChannelProps {
  /**
   * Encoded string you can get from basic fetchChannel
   */
  nextpage?: string
}

export class ChannelFetcher extends PipedFetcher {
  protected channelEndpoint = this.baseUrl + "/channel"
  protected channelNextPageEndpoint = this.baseUrl + "/nextpage/channel"

  async fetchChannel(props: FetchChannelProps): Promise<Channel | null> {
    const { userId } = props
    const url = `${this.channelEndpoint}/${userId}`

    try {
      const response = await this.httpClient.get<Channel>(url)

      return response.data
    } catch (error) {
      console.error("Failed to fetch channel. " + error)

      return null
    }
  }

  async fetchChannelNextPage(props: FetchChannelNextPageProps): Promise<ChannelNextPage | null> {
    const { nextpage, userId } = props

    const params = { nextpage }
    const url = `${this.channelNextPageEndpoint}/${userId}`

    try {
      const response = await this.httpClient.get<ChannelNextPage>(url, { params })

      return response.data
    } catch (error) {
      console.error("Failed to fetch channel next page. " + error)

      return null
    }
  }
}
