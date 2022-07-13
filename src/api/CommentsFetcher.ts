import { CommentsPage } from "../models/Comment"
import { PipedFetcher } from "./PipedFetcher"

export interface CommentsFetcherFetchCommentsParams {
  videoId: string
}

export interface CommentsFetcherFetchCommentsNextPageParams {
  videoId: string
  nextpage: string
}

export class CommentsFetcher extends PipedFetcher {
  protected readonly commentsEndpoint = this.baseUrl + "/comments"
  protected readonly commentsNextPageEndpoint = this.baseUrl + "/nextpage/comments"

  async fetchComments(params: CommentsFetcherFetchCommentsParams): Promise<CommentsPage | null> {
    const { videoId } = params

    const url = `${this.commentsEndpoint}/${videoId}`

    try {
      const response = await this.httpClient.get<CommentsPage>(url)

      return response.data
    } catch (error) {
      console.error(`Failed to fetch comments for video ${videoId}. ${error}`)

      return null
    }
  }

  /**
   * Fetch comments of video or concrete comment
   */
  async fetchCommentsNextPage(
    props: CommentsFetcherFetchCommentsNextPageParams,
  ): Promise<CommentsPage | null> {
    const { nextpage, videoId } = props

    const params = { nextpage }

    const url = `${this.commentsNextPageEndpoint}/${videoId}`

    try {
      const response = await this.httpClient.get(url, { params })

      return response.data
    } catch (error) {
      console.error(`Failed to fetch comments next page for video ${videoId}. ${error}`)

      return null
    }
  }
}
