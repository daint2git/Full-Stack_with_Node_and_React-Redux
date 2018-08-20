import either from './either'

export const createMiddleware = (targetActions = [], middleware) => {
  return store => next => action => {
    if (!targetActions.find(targetAction => action.type === either(targetAction.type)(targetAction)))
      return next(action)
    return middleware(store, next, action)
  }
}

export const createAction = (
  type,
  error = false,
  payloadCreator = value => value,
  metaCreator = {},
) => {
  const actionCreator = (...args) => ({
    type,
    error,
    payload: payloadCreator(...args),
    metaCreator,
  })
  actionCreator.type = type
  return actionCreator
}

export const createErrorAction = type => createAction(`ERROR/${type}`, true)

export const handleAction = (targetAction, updater, initalState = {}) => {
  return (state = initalState, action) => {
    const { type, payload } = action
    if (type !== either(targetAction.type)(targetAction))
      return state
    return updater(state, payload)
  }
}

export const handleActions = (reducers = [], initalState = {}) => {
  return (state = initalState, action) => {
    return reducers.reduce((state, reducer) => reducer(state, action), state)
  }
}