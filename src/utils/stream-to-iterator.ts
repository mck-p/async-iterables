import isReadStream from '@shared/utils/is/readable-stream'

const streamToIterator = (possibleStream: any) => {
  if (!isReadStream(possibleStream)) {
    throw new TypeError(`You must give streamToIterator a readstream, gave "${typeof possibleStream}" instead`)
  }

  return possibleStream.iterator()
}

export default streamToIterator