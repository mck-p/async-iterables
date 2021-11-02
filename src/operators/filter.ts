import createAsyncIterator from "@shared/utils/create-async-iterator";

const filter = <T = unknown>(fn: (value: T) => boolean, possiblyIterator: any) => {
  const iterator = createAsyncIterator<T>(possiblyIterator)

  return createAsyncIterator<T>(async function* () {
    for await (const value of iterator) {
      if (await fn(value)) {
        yield value
      }
    }
  })
}

export default filter