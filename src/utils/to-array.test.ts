import toArray from './to-array'
import createAsyncIterator from './create-async-iterator'

describe('to-array', () => {
  describe('Given an async iterator', () => {
    it('returns an array of the values', async () => {
      const iter = createAsyncIterator([1, 2, 3])
      const value = await toArray(iter)

      expect(value).toEqual([1, 2, 3])
    })
  })
})