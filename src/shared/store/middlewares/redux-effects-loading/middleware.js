import { preventSubmit, startLoading, stopLoading } from './reducer'
import { createMiddleware } from '../utils'

const loading = ({ dispatch }, next, action) => {
  dispatch(preventSubmit())
  const timerId = setTimeout(() => dispatch(startLoading()), 100)
  return next(action)
    .then(result => {
      const { data } = result
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

export default function loadingMiddleware(targetActions = []) {
  return createMiddleware(targetActions, loading)
}