import either from './either'

export default function createMiddleware(targetActions = [], middleware) {
  return store => next => action => {
    if (!targetActions.find(targetAction => action.type === either(targetAction.type)(targetAction)))
      return next(action)
    return middleware(store, next, action)
  }
}