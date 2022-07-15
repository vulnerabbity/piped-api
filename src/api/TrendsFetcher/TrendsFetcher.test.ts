import { TrendsFetcher } from "./TrendsFetcher"
import { testVideo } from "../../models/ModelTester"

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
