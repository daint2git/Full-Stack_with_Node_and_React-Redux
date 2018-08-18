import { steps } from 'redux-effects-steps'
import { createAction, handleActions } from 'redux-actions'
import { fetch } from './axios'

const changeTextSuccess = createAction('CHANGE_TEXT_SUCCESS')
const readPhonesSuccess = createAction('READ_PHONES_SUCCESS')

export function changeText(text) {
  return changeTextSuccess({ text })
}

export function readPhones(request) {
  return steps(
    fetch({
      method: 'get',
      url: 'phones',
      ...request,
    }),
    [readPhonesSuccess]
  )
}

export const INITIAL_STATE = () => ({
  result: '',
  list: [],
})

export default handleActions(
  {
    CHANGE_TEXT_SUCCESS: (state, { payload }) => ({ ...state, result: payload.text }),
    READ_PHONES_SUCCESS: (state, { payload }) => ({ ...state, list: payload }),
  },
  INITIAL_STATE()
)