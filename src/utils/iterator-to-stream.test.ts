import iteratorToStream from './iterator-to-stream'
import isReadStream from './is/readable-stream'
describe('iterator-to-stream', () => {
  describe('When given something that does not have an iterator method', () => {
    it('throws a TypeError', () => {
      const notIterator = {}

      expect(() => iteratorToStream(notIterator)).toThrowError(TypeError)
    })
  })

  describe('When given a sync iterator', () => {
    it('returns a readstream', () => {
      const iter: string[] = []
      const stream = iteratorToStream<string>(iter)
      const expected = true
      const actual = isReadStream(stream)

      expect(actual).toBe(expected)
    })

    it('returns a readstream of the values', (done) => {
      const iter = [1, 2, 3]
      const stream = iteratorToStream<number>(iter)
      
      const seen: number[] = []

      stream.on('data', (data) => {
        seen.push(data)
      }).on('end', () => {
        expect(iter).toEqual(seen)
        done()
      })
    })
  })
})