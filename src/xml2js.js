import {
  defaults
} from './defaults.js'
import {
  Builder
} from './builder.js'
import {
  Parser,
  parseString,
  parseStringPromise
} from './parser.js'
import * as processors from './processors.js'

class ValidationError extends Error {
  // NOTHING
}

export {
  defaults,
  processors,
  ValidationError,
  Builder,
  Parser,
  parseString,
  parseStringPromise
}

export default {
  defaults,
  processors,
  ValidationError,
  Builder,
  Parser,
  parseString,
  parseStringPromise
}
