import { PipedFetcher } from "./PipedFetcher"

export class SearchSuggester extends PipedFetcher {
  protected suggestionsUrl = this.baseUrl + "/suggestions"

  /**
   * Returns array of suggestions
   *
   * Example:
   *
   * getSuggestions("rick")
   *
   * Output:
   * ["rick roll", "rick ross", ...]
   */
  async getSuggestions(query: string): Promise<string[] | null> {
    const params = { query }

    try {
      const response = await this.httpClient.get(this.suggestionsUrl, { params })

      return response.data
    } catch (error) {
      console.error("Failed to fetch search suggestions. " + error)

      return null
    }
  }
}
