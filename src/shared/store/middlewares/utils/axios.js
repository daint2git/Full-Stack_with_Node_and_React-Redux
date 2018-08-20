import axios from 'axios'
import { AXIOS } from '../redux-effects-axios'
import { createAction } from './'

const defaultAxios = axios.create({
  baseURL: '/api',
  timeout: 100000,
  withCredentials: true,
})

export const fetch = (request, instance = defaultAxios) =>
  createAction(AXIOS)({ request, instance })