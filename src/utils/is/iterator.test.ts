import isIterator from "./iterator";

describe('Is -> Iterator', () =>  {
  describe('When given a custom iterator', () => {
    it('returns true', () => {
      const iterator = {
        [Symbol.iterator]: () => {}
      }

      const expected = true
      const actual = isIterator(iterator)

      expect(actual).toBe(expected)
    })

    describe('When given an array', () => {
      it('returns true', () => {
        const arr = [1, 2, 3]
        const expected = true
        const actual = isIterator(arr)

        expect(actual).toBe(expected)
      })
    })

    describe('When given a map', () => {
      it('returns true', () => {
        const map = new Map()
        const expected = true
        const actual = isIterator(map)

        expect(actual).toBe(expected)
      })
    })

    describe('When given a set', () => {
      it('returns true', () => {
        const set = new Set()
        const expected = true
        const actual = isIterator(set)

        expect(actual).toBe(expected)
      })
    })
  })

  describe('When not given an iterable', () => {
    describe('When given an POJO', () => {
      it('returns false', () => {
        const obj = {}
        const expected = false
        const actual = isIterator(obj)

        expect(actual).toBe(expected)
      })
    })
  })
})