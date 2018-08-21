import { createMiddleware } from '../redux-utils'
import { count } from './reducer'

const countCallApi = ({ dispatch }, next, action) => {
  dispatch(count())
  return next(action)
}

export default function countCallApiMiddleware(targetActions = []) {
  return createMiddleware(targetActions, countCallApi)
}