import { steps } from 'redux-effects-steps'
import { push } from 'react-router-redux'
import { size } from 'lodash-es'
import { simpleLocalStorage } from 'simple-storage'
import { fetch } from './utils/axios'
import {
  createAction,
  createErrorAction,
  handleActions,
  handleAction,
} from './utils'

const verifySuccess = createAction('VERIFY_SUCCESS')
const verifyFail = createAction('VERIFY_FAIL')
const checkUser = user => !user ? Promise.reject() : Promise.resolve()

export const verify = () => {
  const user = simpleLocalStorage.getItem('user')
  return steps(
    checkUser(user),
    verifySuccess,
  )
}

const loginSuccess = createAction('LOGIN_SUCCESS')
const loginFail = createErrorAction('LOGIN_FAIL')
export const login = (username, password, location) => {
  return steps(
    fetch({
      method: 'get',
      url: 'users',
    }),
    [
      users => {
        const errors = {}
        if (username === '' && password === '') {
          errors.reason = 'Please enter information'
          return loginFail(errors)
        }
        const user = users.find(user => user.username === username)
        if (user) {
          if (!(user.password === password)) errors.password = 'Password is invalid'
        } else {
          errors.username = 'Username is invalid'
        }
        if (size(errors) > 0) return loginFail(errors)
        simpleLocalStorage.setItem('user', user)
        return steps(
          loginSuccess({ ...user }),
          push(location),
        )
      },
      error => loginFail(error),
    ]
  )
}

const logoutSuccess = createAction('LOGOUT_SUCCESS')
export const logout = () => {
  window.location.href = `/login`
  simpleLocalStorage.removeItem('user')
  return logoutSuccess()
}

export const INITIAL_STATE = () => ({
  user: simpleLocalStorage.getItem('user') || {},
  errors: {},
})

export default handleActions(
  [
    handleAction(loginSuccess, (state, payload) => ({ ...state, user: { ...payload } })),
    handleAction(loginFail, (state, payload) => ({ ...state, errors: { ...payload } })),
    handleAction(logoutSuccess, () => INITIAL_STATE()),
    handleAction(verifySuccess, state => ({ ...state })),
    handleAction(verifyFail, state => ({ ...state })),
  ],
  INITIAL_STATE()
)