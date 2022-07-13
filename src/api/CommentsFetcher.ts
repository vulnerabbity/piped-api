import { CommentsPage } from "../models/Comment"
import { PipedFetcher } from "./PipedFetcher"

export interface CommentsFetcherFetchCommentsProps {
  videoId: string
  nextpage: string
}

export class CommentsFetcher extends PipedFetcher {
  protected readonly commentsEndpoint = this.baseUrl + "/comments"
  protected readonly commentsNextPageEndpoint = this.baseUrl + "/nextpage/comments"

  async fetchComments(props: CommentsFetcherFetchCommentsProps): Promise<CommentsPage | null> {
    const { videoId, nextpage } = props
    const params = { nextpage }

    const url = this.getUrl(props)

    try {
      const response = await this.httpClient.get<CommentsPage>(url, { params })

      return response.data
    } catch (error) {
      console.error(`Failed to fetch comments for video ${videoId}. ${error}`)

      return null
    }
  }

  protected getUrl(props: CommentsFetcherFetchCommentsProps) {
    const { nextpage, videoId } = props

    let url = `${this.commentsEndpoint}/${videoId}`

    if (nextpage) {
      url = `${this.commentsNextPageEndpoint}/${videoId}`
    }

    return url
  }
}
