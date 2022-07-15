import { testChannels } from "../../models/Channel"
import { testPlaylists } from "../../models/Playlist"
import { testVideos } from "../../models/Video"
import { TestUtils } from "../../utils/TestUtils"
import { Searcher } from "./Searcher"

describe(Searcher.name, () => {
  const searcher = new Searcher()
  const searchQuery = "never gonna"
  const searchQueryWithTypo = "nver gona"

  it("should search", async () => {
    const result = await searcher.searchAll({ query: searchQueryWithTypo })

    if (result === null) {
      throw new Error(`${Searcher.name}.searchAll returned null`)
    }

    const { corrected, items, nextpage, suggestion } = result

    TestUtils.expectStringOrNull(nextpage)
    TestUtils.expectBoolean(corrected)
    TestUtils.expectStringOrNull(suggestion)
  })

  it("should search videos", async () => {
    const videosResult = await searcher.searchVideos({ query: searchQuery })

    if (videosResult === null) {
      throw new Error(`${Searcher.name}.searchVideos returned null`)
    }

    testVideos(videosResult.items)
  })

  it("should search channels", async () => {
    const result = await searcher.searchChannels({ query: searchQuery })

    if (result === null) {
      throw new Error(`${Searcher.name}.searchChannels returned null`)
    }

    testChannels(result.items)
  })

  it("should search playlists", async () => {
    const result = await searcher.searchPlaylists({ query: searchQuery })

    if (result === null) {
      throw new Error(`${Searcher.name}.searchPlaylists returned null`)
    }

    testPlaylists(result.items)
  })
})
