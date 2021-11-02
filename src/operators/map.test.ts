import map from './map'
import isAsyncIterator from '@shared/utils/is/async-iterator'
import toArray from '@shared/utils/to-array'

describe('Operators -> Map', () => {
  describe('Given an array as the data', () => {
    it('returns an async iterator of the modified data', async () => {
      const arr = [1, 2, 3]
      const double = (x: number) => x * 2
      const iter = map<number, number>(double, arr)

      expect(isAsyncIterator(iter)).toBe(true)

      const values = await toArray(iter)

      expect(values).toEqual([
        2,
        4,
        6
      ])
    })
  })

  describe('Given a set as the data', () => {
    it('returns an async iterator of the modified data', async () => {
      const arr = new Set([1, 2, 3])
      const double = (x: number) => x * 2
      const iter = map<number, number>(double, arr)

      expect(isAsyncIterator(iter)).toBe(true)

      const values = await toArray(iter)

      expect(values).toEqual([
        2,
        4,
        6
      ])
    })
  })

  describe('Given a map as the data', () => {
    it('returns an async iterator of the modified data', async () => {
      const arr = new Map([[1, 1], [2, 2], [3, 3]])
      const double = ([index, value]: [number, number]) => `${index}:${value}`
      const iter = map<[number, number], string>(double, arr)

      expect(isAsyncIterator(iter)).toBe(true)

      const values = await toArray(iter)

      expect(values).toEqual([
        `1:1`,
        `2:2`,
        `3:3`
      ])
    })
  })

  describe('Given an object as the data', () => {
    it('returns an async iterator of the modified data', async () => {
      const arr = { a: 1, b: 2, c: 3 }
      const double = ([index, value]: [number, number]) => `${index}:${value}`
      const iter = map<[number, number], string>(double, arr)

      expect(isAsyncIterator(iter)).toBe(true)

      const values = await toArray(iter)

      expect(values).toEqual([
        `a:1`,
        `b:2`,
        `c:3`
      ])
    })
  })

  describe('Given a single value as the data', () => {
    describe('Given true as the data', () => {
      it('returns an async iterator of the modified data', async () => {
        const arr = true
        const double = (value: boolean) => !value
        const iter = map<boolean, boolean>(double, arr)
  
        expect(isAsyncIterator(iter)).toBe(true)
  
        const values = await toArray(iter)
  
        expect(values).toEqual([false])
      })
    })

    describe('Given a number as the data', () => {
      it('returns an async iterator of the modified data', async () => {
        const arr = 1
        const double = (value: number) => value + 1
        const iter = map<number, number>(double, arr)
  
        expect(isAsyncIterator(iter)).toBe(true)
  
        const values = await toArray(iter)
  
        expect(values).toEqual([2])
      })
    })

    describe('Given a string as the data', () => {
      it('returns an async iterator of the modified data', async () => {
        const arr = '123'
        const double = (value: string) => Number(value)
        const iter = map<string, number>(double, arr)
  
        expect(isAsyncIterator(iter)).toBe(true)
  
        const values = await toArray(iter)
  
        expect(values).toEqual([123])
      })
    })
  })
})