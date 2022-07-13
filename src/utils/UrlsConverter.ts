export class UrlsConverter {
  static removeUrlSlashEnd(baseUrl: string): string {
    return this.removeConcreteLastChar(baseUrl, "/");
  }

  private static removeConcreteLastChar(
    str: string,
    concreteChar: string
  ): string {
    const isEndsWithConcreteChar = str[-1] === concreteChar;

    if (isEndsWithConcreteChar) {
      // Removes last char
      str = str.slice(0, -1);
    }

    return str;
  }
}
