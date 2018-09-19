import { steps } from 'redux-effects-steps'
import { push } from 'react-router-redux'
import { simpleLocalStorage } from 'simple-storage'
import { fetch } from './utils/axios'
import { createAction, createErrorAction, handleActions, handleAction } from './utils'

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
    fetch({ method: 'post', url: 'auth', data: { username, password } }),
    [
      account => {
        simpleLocalStorage.setItem('user', account)
        return steps(
          loginSuccess({ ...account }),
          push(location),
        )
      },
      loginFail,
    ],
  )
}

const logoutSuccess = createAction('LOGOUT_SUCCESS')
export const logout = () => {
  simpleLocalStorage.removeItem('user')
  window.location.href = `/login`
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
  INITIAL_STATE(),
)