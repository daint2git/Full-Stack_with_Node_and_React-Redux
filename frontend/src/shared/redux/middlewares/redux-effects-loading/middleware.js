import { createMiddleware } from '../redux-utils'
import { preventSubmit, startLoading, stopLoading } from './reducer'

const loading = (store, next, action) => {
  const { dispatch } = store
  dispatch(preventSubmit())
  const timerId = setTimeout(() => dispatch(startLoading()), 100)
  return next(action)
    .then(response => {
      const { data } = response
      clearTimeout(timerId)
      dispatch(stopLoading())
      return data
    })
    .catch(error => {
      const { response: { data: reason, status } } = error
      clearTimeout(timerId)
      dispatch(stopLoading())
      return Promise.reject({ reason, status })
    })
}

const loadingMiddleware = targetActions => createMiddleware(targetActions, loading)

export default loadingMiddleware