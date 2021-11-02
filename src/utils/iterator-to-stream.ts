import isIterator from '@shared/utils/is/iterator'
import isAsyncIterator from '@shared/utils/is/async-iterator'
import { Readable } from  'stream'

const iteratorToStream = <T = unknown>(possibleIterator: unknown): Readable => {
  const pi: any = possibleIterator

  if (!isAsyncIterator(pi) && !isIterator(pi)) {
    throw new TypeError(`You must give me an iterator to convert into a stream. You gave me "${typeof pi}" instead`)
  }

  return Readable.from(pi)
}

export default iteratorToStream