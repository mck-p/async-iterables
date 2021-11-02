import createAsyncIterator from "@shared/utils/create-async-iterator";

const map = <T = unknown, U = unknown>(fn: (value: T) => U, possiblyIterator: any) => {
  const iterator = createAsyncIterator<T>(possiblyIterator)

  return createAsyncIterator<U>(async function* () {
    for await (const value of iterator) {
      yield fn(value)
    }
  })
}

export default map