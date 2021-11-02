import iteratorToStream from "./iterator-to-stream"
import streamToIterator from "./stream-to-iterator"
import isIterator from "./is/iterator"
import isReadableStream from "./is/readable-stream"

const createAsyncIterator = <T = unknown>(value: any): AsyncIterable<T> => {
  if (typeof value === 'undefined') {
    throw new TypeError('You must give a value to createAsyncIterator. You gave "undefined"')
  }

  if (isIterator(value)) {
    return streamToIterator(iteratorToStream(value))
  }

  if(isReadableStream(value)) {
    return streamToIterator(value)
  }

  if (typeof value === 'function') {
    return {
      [Symbol.asyncIterator]: value
    }
  }

  if (typeof value === 'object') {
    return createAsyncIterator(Object.entries(value))
  }
  
  // They gave us a primitive value and we are just going
  // to return the value to them as an async iterator
  return createAsyncIterator([value])

}

export default createAsyncIterator