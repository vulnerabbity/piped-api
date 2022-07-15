import { TestUtils } from "../utils/TestUtils"

export interface Chapter {
  title: string

  /**
   * Absolute url to chapter image
   */
  image: string

  /**
   * Seconds before chapter starts
   */
  start: number
}

export function testChapters(chapters: Chapter[]) {
  chapters.forEach(chapter => testChapter(chapter))
}

export function testChapter(chapter: Chapter) {
  const { image, start, title } = chapter

  TestUtils.expectString(image)
  TestUtils.expectNumber(start)
  TestUtils.expectString(title)
}
