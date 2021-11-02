const isAsyncIterator = (obj: any) => typeof obj[Symbol.asyncIterator] === 'function'

export default isAsyncIterator