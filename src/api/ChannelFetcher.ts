import { DetailedChannel, DetailedChannelNextPage } from "../models/DetailedChannel"
import { PipedFetcher } from "./PipedFetcher"

export interface FetchChannelProps {
  userId: string
}

export interface FetchChannelNextPageProps extends FetchChannelProps {
  /**
   * Encoded string you can get from basic fetchChannel
   */
  nextpage: string
}

export class ChannelFetcher extends PipedFetcher {
  protected channelEndpoint = this.baseUrl + "/channel"
  protected channelNextPageEndpoint = this.baseUrl + "/nextpage/channel"

  async fetchChannel(props: FetchChannelProps): Promise<DetailedChannel | null> {
    const { userId } = props
    const url = `${this.channelEndpoint}/${userId}`

    try {
      const response = await this.httpClient.get<DetailedChannel>(url)

      return response.data
    } catch (error) {
      console.error("Failed to fetch channel. " + error)

      return null
    }
  }

  /**
   * Allows to fetch next page of channel.
   * Requires encoded "nextpage" string which you can get from fetchChannel()
   */
  async fetchChannelNextPage(
    props: FetchChannelNextPageProps,
  ): Promise<DetailedChannelNextPage | null> {
    const { nextpage, userId } = props

    const params = { nextpage }
    const url = `${this.channelNextPageEndpoint}/${userId}`

    try {
      const response = await this.httpClient.get<DetailedChannelNextPage>(url, { params })

      return response.data
    } catch (error) {
      console.error("Failed to fetch channel next page. " + error)

      return null
    }
  }
}
