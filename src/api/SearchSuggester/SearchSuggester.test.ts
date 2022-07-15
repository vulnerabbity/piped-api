import { TestUtils } from "../../utils/TestUtils"
import { SearchSuggester } from "./SearchSuggester"
import { expect } from "chai"

describe(SearchSuggester.name, () => {
  const suggester = new SearchSuggester()

  it("should get suggestions", async () => {
    const suggestions = await suggester.getSuggestions("never gonna")

    if (suggestions === null) {
      throw new Error("Search suggester returned null")
    }

    const hasSuggestions = suggestions.length > 0
    expect(hasSuggestions).equal(true)
    suggestions.forEach(s => TestUtils.expectString(s))
  })
})
