const isIterator = (iter: any) => typeof iter[Symbol.iterator] === 'function'

export default isIterator