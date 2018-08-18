import { count } from './reducer'

const countCallApi = ({ dispatch }, next, action) => {
  dispatch(count())
  return next(action)
}

export default function countCallApiMiddleware(targetActions = []) {
  const handlers = targetActions.reduce((result, targetAction) => {
    result[targetAction] = countCallApi
    return result
  }, {})
  return store => next => action => {
    const handler = handlers[action.type]
    return handler ? handler(store, next, action) : next(action)
  }
}