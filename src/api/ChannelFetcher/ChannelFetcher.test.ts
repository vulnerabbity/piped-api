import { testDetailedChannel, testDetailedChannelNextPage } from "../../models/DetailedChannel"
import { ChannelFetcher } from "./ChannelFetcher"

describe(ChannelFetcher.name, async () => {
  const channelFetcher = new ChannelFetcher()
  const rickAstleyId = "UCuAXFkgsw1L7xaCfnd5JJOw"

  it("should fetch channel and next page", async () => {
    const userId = rickAstleyId

    const channel = await channelFetcher.fetch({ userId })

    if (channel === null) {
      throw new Error(`${ChannelFetcher.name} returned null`)
    }

    testDetailedChannel(channel)

    await testNextPage({ nextpage: channel.nextpage ?? "", userId })
  })
})

async function testNextPage({ userId, nextpage }: { userId: string; nextpage: string }) {
  const channelFetcher = new ChannelFetcher()

  const response = await channelFetcher.fetchNextPage({ userId, nextpage })

  if (response) {
    testDetailedChannelNextPage(response)
  }
}
