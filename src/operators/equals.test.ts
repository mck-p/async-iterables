import equals from './equals'

describe('Operators -> Utils', () => {
  describe('Given two iterators with equal values', () => {
    it('returns true', async () => {
      const iter1 = [1, 2, 3]
      const iter2 = [1, 2, 3]
      
      const expected = true
      const actual = await equals(iter1, iter2)

      expect(actual).toBe(expected)
    })
  })

  describe('Given two iterators that are not of equal length', () => {
    it('returns false', async () => {
      const iter1 = [1]
      const iter2 = [1, 2, 3]
      
      const expected = false
      const actual = await equals(iter1, iter2)

      expect(actual).toBe(expected)
    })
  })

  describe('Given two iterators that do not have equal values', () => {
    it('returns false', async () => {
      const iter1 = [1, 2, 4]
      const iter2 = [1, 2, 3]
      
      const expected = false
      const actual = await equals(iter1, iter2)

      expect(actual).toBe(expected)
    })
  })

  describe('Given an equality function', () => {
    it('uses that to check equality instead of the default strictly equals', async () => {
      interface User { id: string }
      const users1 = [{ id: 1 }]
      const users2 = [{ id: 1 }]
      const equality = jest.fn((a: User, b: User) => a.id === b.id)
      const expected = true
      const actual = await equals(users1, users2, equality)

      expect(actual).toBe(expected)
      expect(equality).toHaveBeenCalledTimes(1)
    })
  })
})