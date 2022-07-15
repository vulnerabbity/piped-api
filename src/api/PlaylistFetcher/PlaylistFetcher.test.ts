import { testDetailedPlaylist } from "../../models/DetailedPlaylist"
import { PlaylistFetcher } from "./PlaylistFetcher"

describe(PlaylistFetcher.name, () => {
  const playlistFetcher = new PlaylistFetcher()
  const BEST_OF_RICK_ASTLEY_PLAYLIST_ID = "PL2MI040U_GXq1L5JUxNOulWCyXn-7QyZK"

  it("should fetch playlist", async () => {
    const playlist = await playlistFetcher.fetchPlaylist({
      playlistId: BEST_OF_RICK_ASTLEY_PLAYLIST_ID,
    })

    if (playlist === null) {
      throw new Error(`${PlaylistFetcher.name}.fetchPlaylist returned null`)
    }

    testDetailedPlaylist(playlist)
  })
})
