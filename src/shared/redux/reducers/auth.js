import { steps } from 'redux-effects-steps'
import { push } from 'react-router-redux'
import { size } from 'lodash-es'
import { fetch } from './utils/axios'
import {
  createAction,
  createErrorAction,
  handleActions,
  handleAction,
} from './utils'

const loginSuccess = createAction('LOGIN_SUCCESS')
const loginFail = createErrorAction('LOGIN_FAIL')

export function login(username, password, location = 'home', request) {
  return steps(
    fetch({
      method: 'get',
      url: 'users',
      ...request,
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
        return steps(
          loginSuccess({ username, password }),
          push(location),
        )
      },
      error => loginFail(error),
    ]
  )
}

export const INITIAL_STATE = () => ({
  user: {},
  errors: {},
})

export default handleActions(
  [
    handleAction(loginSuccess, (state, payload) => ({ ...state, user: { ...payload } })),
    handleAction(loginFail, (state, payload) => ({ ...state, errors: { ...payload } })),
  ],
  INITIAL_STATE()
)