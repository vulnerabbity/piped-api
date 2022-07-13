export interface CommentsPage {
  comments: Comment[]

  /**
   * Whether or not the comments are disabled
   */
  disabled: boolean

  /**
   * String encoded next page
   */
  nextPage: string | null
}

export interface Comment {
  /**
   * Name of author
   */
  author: string

  commentId: string

  commentText: string

  /**
   * String represents how long ago comment was made
   *
   * Example:
   * 14 hours ago
   */
  commentedTime: string

  /**
   * Relative url to user channel
   *
   * Example:
   * "/channel/..."
   */
  commentorUrl: string

  /**
   * Absolute url to thumbnail
   */
  thumbnail: string

  /**
   * Encoded string to view replies
   */
  repliesPage: string | null

  likedCount: number

  /**
   * Whether or not comment was liked by video author
   */
  hearted: boolean

  /**
   * Whether or not comment was pinned by video author
   */
  pinned: boolean

  verified: boolean
}
