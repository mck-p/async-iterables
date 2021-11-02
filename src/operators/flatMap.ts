import createAsyncIterator from "@shared/utils/create-async-iterator";
import { InnerIterable } from "@shared/types";

const flatMap = <T = unknown, U = unknown>(fn: (value: T) => InnerIterable<U> | Promise<InnerIterable<U>>, possiblyIterator: any) => {
  const iterator = createAsyncIterator<T>(possiblyIterator)

  return createAsyncIterator<U>(async function* () {
    for await (const value of iterator) {
      yield* createAsyncIterator(await fn(value))
    }
  })
}

export default flatMap