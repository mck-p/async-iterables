import { InnerIterable } from "@shared/types"
import createAsyncIterator from "./create-async-iterator"

const toArray = async <T = unknown>(iterator: InnerIterable<T>): Promise<T[]> => {
  const iter = createAsyncIterator(iterator)
  const values = []

  for await (const value of iterator) {
    values.push(value)
  }

  return values
}

export default toArray