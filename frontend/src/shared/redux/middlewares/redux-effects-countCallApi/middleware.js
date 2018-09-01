import { createMiddleware } from '../redux-utils'
import { count } from './reducer'

const countCallApi = (store, next, action) => {
  const { dispatch } = store
  dispatch(count())
  return next(action)
}

const countCallApiMiddleware = targetActions => createMiddleware(targetActions, countCallApi)

export default countCallApiMiddleware