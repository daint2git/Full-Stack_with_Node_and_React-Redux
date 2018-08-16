export const EFFECTS_AXIOS = 'EFFECTS_AXIOS'

export const axiosMiddleware = () => next => action => {
  const { type, payload } = action
  if (type !== EFFECTS_AXIOS) return next(action)
  const { instance, request } = payload
  return instance(request)
}