import streamToIterator from "./stream-to-iterator";
import isAsyncIterator from "./is/async-iterator";
import iteratorToStream from './iterator-to-stream'
import { Writable } from 'stream'
describe('stream-to-iterator', () => {
  describe('When not given a readstream', () => {
    it('throws a TypeError', () => {
      const stream = new Writable()

      expect(() => streamToIterator(stream)).toThrowError(TypeError)
    })
  })

  describe('When given a readstream', () => {
    it('returns an async iterator', () => {
      const stream = iteratorToStream([1, 2, 3])
      const iterator = streamToIterator(stream)
      const expected = true
      const actual = isAsyncIterator(iterator)

      expect(actual).toEqual(expected)
    })

    it('returns an async iterator of the values', async () => {
      const values = [1, 2, 3]
      const stream = iteratorToStream(values)
      const expected = values
      const iter = streamToIterator(stream)

      const actual = []

      for await (const value of iter) {
        actual.push(value)
      }
      
      expect(actual).toEqual(expected)
    })
  })
})