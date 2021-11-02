import isAsyncIterator from "./async-iterator";

describe("Is -> Async Iterator", () => {
  describe("When given an async iterator", () => {
    it("returns true", () => {
      const myAsyncIterable = {
        async *[Symbol.asyncIterator]() {
          yield "hello";
        },
      };

      const expected = true;
      const actual = isAsyncIterator(myAsyncIterable);

      expect(actual).toBe(expected);
    });
  });

  describe('When not given an async iterator', () => {
    it('returns false', () => {
      const notAsync = {
        [Symbol.iterator]: () => {}
      }

      const expected = false
      const actual = isAsyncIterator(notAsync)

      expect(actual).toBe(expected)
    })
  })
});
