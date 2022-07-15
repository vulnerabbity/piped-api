import { testDetailedVideo } from "../../models/DetailedVideo"
import { VideoFetcher } from "./VideoFetcher"

describe(VideoFetcher.name, () => {
  const videoFetcher = new VideoFetcher()

  it("should fetch video", async () => {
    const neverGonnaGiveYouUpId = "dQw4w9WgXcQ"
    const video = await videoFetcher.fetch({ videoId: neverGonnaGiveYouUpId })

    if (video === null) {
      throw new Error("Video fetcher returned null")
    }

    testDetailedVideo(video)
  })
})
