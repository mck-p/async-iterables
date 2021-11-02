import { InnerIterable } from "@shared/types";
import toArray from '@shared/utils/to-array'
const defaultComparison = (a: any, b: any) => a === b

const equals = async <T = unknown, U = unknown>(iter1: InnerIterable<T>, iter2: InnerIterable<U>, equalityCheck = defaultComparison) => {
  const arr1 = await toArray(iter1)
  const arr2 = await toArray(iter2)

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    const v1 = arr1[i]
    const v2 = arr2[i]
    const result = await equalityCheck(v1, v2)

    if(!result) {
      return false
    }
  }

  return true
}

export default equals