import axios from 'axios'
import { EFFECTS_AXIOS } from 'shared/store/middlewares/redux-effects-axios'
import { createAction  } from 'redux-actions'

const defaultAxios = axios.create({
  baseURL: '/api',
  timeout: 100000,
  withCredentials: true,
})

export const fetch = (request, instance = defaultAxios) =>
  createAction(EFFECTS_AXIOS)({ request, instance })