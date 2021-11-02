import stream from 'stream'

const isReadableStream = (obj: any) => obj && 
  typeof obj.read === 'function' &&
  typeof obj.on === 'function' &&
  typeof obj.readable !== 'undefined' &&
  typeof obj.pipe === 'function' &&
  typeof obj.unpipe === 'function'

export default isReadableStream