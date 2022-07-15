import { expect } from "chai"
import { JSTypes } from "./JsTypes"

class TestsUtils {
  expectNumber(value: number) {
    expect(typeof value).equal(JSTypes.number)
  }

  expectString(value: string) {
    expect(typeof value).equal(JSTypes.string)
  }

  expectNull(value: null) {
    expect(value === null).equal(true)
  }

  expectBoolean(value: boolean) {
    expect(typeof value).equal(JSTypes.boolean)
  }

  expectObject(value: Record<string, unknown>) {
    // null is object in js
    const isNotNull = value !== null
    const isObject = typeof value === JSTypes.object
    expect(isNotNull && isObject).equal(true)
  }

  expectArray(value: Record<number, unknown>) {
    expect(Array.isArray(value)).equal(true)
  }

  expectStringOrNull(value: string | null) {
    const isNull = value === null

    if (isNull) {
      expect(value).equal(null)
    } else {
      this.expectString(value)
    }
  }
}

const testUtilsInstance = new TestsUtils()

export { testUtilsInstance as TestUtils }
