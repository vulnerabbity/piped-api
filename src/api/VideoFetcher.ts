import { DetailedVideo } from "../models/DetailedVideo"
import { PipedFetcher } from "./PipedFetcher"

export interface VideoFetcherFetchVideoParams {
  videoId: string
}

export class VideoFetcher extends PipedFetcher {
  private videoEndpoint = this.baseUrl + "/streams"

  async fetchVideo(params: VideoFetcherFetchVideoParams): Promise<DetailedVideo | null> {
    const { videoId } = params

    const url = `${this.videoEndpoint}/${videoId}`

    try {
      const response = await this.httpClient.get(url)

      return response.data
    } catch (error) {
      console.error(`Failed fetch video with id ${videoId}. ${error}`)

      return null
    }
  }
}
