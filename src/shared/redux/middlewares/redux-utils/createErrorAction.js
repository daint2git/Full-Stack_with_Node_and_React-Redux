import createAction from './createAction'

const ERROR = 'ERROR'

const createErrorAction = type => createAction(`${ERROR}/${type}`, true)

export default createErrorAction