# @mck-p/async-iterables

## Overview

This package houses all of the building blocks to deal with
_most_ things as Async Iterables. This allows you to take
Arrays, Sets, Objects, and even primitives and turn them into
a common interface that you can `map`, `flatMap`, and more.

## Usage

```ts
import { utils, operators } from '@mck-p/async-iterables'

/**
 *
 * Given _some_ value, createAsyncIterator will create an
 * async iterator out of the value. This works with
 * 
 * - Read/Duplex/Transorm Streams
 * - Arrays
 * - Objects
 * - Maps
 * - Sets
 * - Primitive Values (All but `undefined`)
 * - Async Iterators
 * - Generator Functions
 * - Async Generator Functions
 * 
 */
const {
  createAsyncIterator
} = utils

const readStream = createReadStream()
const iterable = utils.createAsyncIterator(readStream)

for await (const value of iterable) {
  console.log(value.toString()) // this will log for each value emitted from the read stream
}

const {
/**
 * 
 * Given a value that can be given to createAsyncIterator,
 * it returns an array of the values of the async iterator.
 * Should be used to await the completion of the iteration
 * and to group all of the items together.
 * 
 */
  toArray,
/**
 * 
 * Given an iterator, return a Readstream. This allows
 * backwards compatability with interfaces that need
 * a stream of data instead of an iterator
 * 
 */
  iteratorToStream,
/**
 * 
 * Given a Read/Duplex/Transform stream, return an iterator
 * of the values
 * 
 */
  streamToIterator,
  is : {
    /**
     * 
     * Given a value, returns true if it can be used as an async iterator
     * 
     */
    asyncIterator,
    /**
     * 
     * Given a value, returns true if it can be used as an iterator
     * 
     */
    iterator,
    /**
     * 
     * Given a value, returns true if it can be used as a Readable stream
     * 
     */
    readableStream
  }
} = utils

const { 
  map,
  flatMap,
  filter,
  equals
} = operators

const baseIterator = [1, 2, 3]
const mapped = map(x => x * 2, baseIterator) // Iterator<1, 2, 3>
const filtered = filter(x => x > 2, baseIterator) // Iterator<3>
const flatMapped = flatMap(x => createAsyncIterator(x * 2)) // Iterator<1, 2, 3>

// equals uses === comparison by default
equals(mapped, flatMapped) // true
equals(baseIterator, map(x => x, baseIterator)) // true

// equals also allows for complex comparison
const users1 = [{ id: 1 }]
const users2 = [{ id: 1 }]
equals(users1, users2, (a, b) => a.id === b.id) // true
```

## Docs

# TODO
