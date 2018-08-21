import createAction from './createAction'

const ERROR = 'ERROR'

export default function createErrorAction(type) {
  return createAction(`${ERROR}/${type}`, true)
}