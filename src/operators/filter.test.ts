import filter from './filter'
import toArray from '@shared/utils/to-array'

describe('Operators -> filter', () => {
  describe('Given an array as data', () => {
    it('returns the values that pass the predicate', async () => {
      const arr = [1, 2, 3]
      const pred = (num: number) => num >= 2
      const iter = filter<number>(pred, arr)

      const values = await toArray(iter)

      expect(values).toEqual([2, 3])
    })
  })

  describe('Given a set as data', () => {
    it('returns the values that pass the predicate', async () => {
      const arr = new Set([1, 2, 3])
      const pred = (num: number) => num >= 2
      const iter = filter<number>(pred, arr)

      const values = await toArray(iter)

      expect(values).toEqual([2, 3])
    })
  })

  describe('Given a map as data', () => {
    it('returns the values that pass the predicate', async () => {
      const arr = new Map([[1, 1], [2, 2], [3, 3]])
      const pred = ([key, value]: [number, number]) => key !== 1
      const iter = filter<[number, number]>(pred, arr)

      const values = await toArray(iter)

      expect(values).toEqual([[2, 2], [3, 3]])
    })
  })

  describe('Given an object as data', () => {
    it('returns the values that pass the predicate', async () => {
      const arr = { 1: 1, 2: 2, 3: 3}
      const pred = ([key, _]: [number, number]) => key != 1
      const iter = filter<[number, number]>(pred, arr)

      const values = await toArray(iter)

      expect(values).toEqual([['2', 2], ['3', 3]])
    })
  })

  describe('Given a single value as data', () => {
    it('returns an empty iterator if the value does not pass predicate', async () => {
      const value = 1
      const pred = (num: number) => num !== 1
      const iter = filter<number>(pred, value)

      const values = await toArray(iter)
      expect(values).toEqual([])
    })
    describe('Given a number as data',  ()=> {
      it('returns the value if it passes the predicate', async () => {
        const value = 1
        const pred = (value: number) => value === 1
        const iter = filter<number>(pred, value)

        const values = await toArray(iter)

        expect(values).toEqual([value])
      })
    })

    describe('Given a string as data',  ()=> {
      it('returns the value if it passes the predicate', async () => {
        const value = 'string'
        const pred = (value: string) => value === 'string'
        const iter = filter<string>(pred, value)

        const values = await toArray(iter)

        expect(values).toEqual([value])
      })
    })

    describe('Given a boolean as data',  ()=> {
      it('returns the value if it passes the predicate', async () => {
        const value = false
        const pred = (value: boolean) => value === false
        const iter = filter<boolean>(pred, value)

        const values = await toArray(iter)

        expect(values).toEqual([value])
      })
    })
  })
})