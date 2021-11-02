import createAsyncIterator from "./create-async-iterator";
import isAsyncIterator from "./is/async-iterator";
import { Readable } from 'stream'

describe('create-async-iterator', () => {
  describe('When given an array', () => {
    it('returns an async iterator', () => {
      const value = [1, 2, 3]
      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(true)
    })
  })

  describe('When given an object', () => {
    it('returns an async iterator',  () => {
      const value = {}
      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(true)
    })
  })

  describe('When given a set', () => {
    it('returns an async iterator',  () => {
      const value = new Set()
      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(true)
    })
  })

  describe('When given a map', () => {
    it('returns an async iterator',  () => {
      const value = new Map()
      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(true)
    })
  })

  describe('When given a readable stream', () => {
    it('returns an async iterator',  () => {
      const value = new Readable()
      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(expected)
    })
  })

  describe('When given an async generator function', () => {
    it('returns an async iterator', async () => {
      const value = async function* () {
        yield 1
        yield 2
      }

      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(expected)

      const values = []
      for await (const v of iter) {
        values.push(v)
      }

      expect(values).toEqual([1, 2])
    })
  })

  describe('When given a generator function', () => {
    it('returns an async iterator', async () => {
      const value = function* () {
        yield 1
        yield 2
      }

      const iter = createAsyncIterator(value)
      const expected = true
      const actual = isAsyncIterator(iter)

      expect(actual).toBe(expected)

      const values = []
      for await (const v of iter) {
        values.push(v)
      }

      expect(values).toEqual([1, 2])
    })
  })

  describe('When given undefined', () => {
    it('throws an error', () => {
      const value = undefined
      expect(() => createAsyncIterator(value)).toThrowError(TypeError)
    })
  })

  describe('When given a single value that is not undefined, generator, Stream, or Iterable', () => {
    it('returns an async iterator of the single value', async () => {
      const value = 1
      const iter = createAsyncIterator(value)
      
      const values = []

      for await (const v of iter) {
        values.push(v)
      }

      expect(values).toEqual([value])
    })
  })
})