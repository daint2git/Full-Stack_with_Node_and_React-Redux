import { preventSubmit, startLoading, stopLoading } from './reducer'

const loading = ({ dispatch }, next, action) => {
  dispatch(preventSubmit())
  const timerId = setTimeout(() => dispatch(startLoading()), 100)
  return next(action)
    .then(({ data }) => {
      clearTimeout(timerId)
      dispatch(stopLoading())
      return data
    })
    .catch(error => {
      clearTimeout(timerId)
      dispatch(stopLoading())
      return Promise.reject(error)
    })
}

export default function loadingMiddleware(targetActions = []) {
  const handlers = targetActions.reduce((result, targetAction) => {
    result[targetAction] = loading
    return result
  }, {})
  return store => next => action => {
    const handler = handlers[action.type]
    return handler ? handler(store, next, action) : next(action)
  }
}