import axios from 'axios'
import { AXIOS } from 'shared/redux/middlewares/redux-effects-axios'
import { createAction } from 'shared/redux/middlewares/redux-utils'

const defaultAxios = axios.create({
  baseURL: `${PROXY_API}/api`,
  timeout: 100000,
  withCredentials: true,
})

export const fetch = (request, instance = defaultAxios) =>
  createAction(AXIOS)({ request, instance })