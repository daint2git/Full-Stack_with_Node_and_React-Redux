import { steps } from 'redux-effects-steps'
import { createAction, handleActions } from 'redux-actions'
import { push } from 'react-router-redux'
import { size } from 'lodash-es'
import { fetch } from './axios'

const loginSuccess = createAction('LOGIN_SUCCESS')
const loginFail = createAction('LOGIN_FAIL')

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
      }
    ]
  )
}

export const INITIAL_STATE = () => ({
  user: {},
  errors: {},
})

export default handleActions(
  {
    LOGIN_SUCCESS: (state, { payload }) => ({ ...state, user: { ...payload } }),
    LOGIN_FAIL: (state, { payload }) => ({ ...state, errors: { ...payload } }),
  },
  INITIAL_STATE()
)