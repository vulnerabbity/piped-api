import { testVideo } from "../../models/Video"
import { TrendsFetcher } from "./TrendsFetcher"

describe(TrendsFetcher.name, () => {
  const trendsFetcher = new TrendsFetcher()
  it("should fetch correct shape", async () => {
    const videos = await trendsFetcher.fetch()

    if (videos === null) {
      throw new Error(`${TrendsFetcher.name}.fetch returned null`)
    }

    for (let video of videos) {
      testVideo(video)
    }
  })
})
