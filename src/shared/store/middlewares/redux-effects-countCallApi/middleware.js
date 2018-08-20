import { count } from './reducer'
import { createMiddleware } from '../utils'

const countCallApi = ({ dispatch }, next, action) => {
  dispatch(count())
  return next(action)
}

export default function countCallApiMiddleware(targetActions = []) {
  return createMiddleware(targetActions, countCallApi)
}