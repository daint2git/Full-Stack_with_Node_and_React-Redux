import { steps } from 'redux-effects-steps'
import { fetch } from './utils/axios'
import { createAction, handleActions } from 'redux-actions'

const changeInputSuccess = createAction('CHANGE_INPUT_SUCCESS')
const readPhonesSuccess = createAction('READ_PHONES_SUCCESS')

export function changeInput(text) {
  return changeInputSuccess({ text })
}

export function readPhones(request) {
  return steps(
    fetch({ method: 'get', url: 'phones', ...request }),
    [readPhonesSuccess],
  )
}

export const INITIAL_STATE = () => ({
  result: '',
  list: [],
})

export default handleActions(
  {
    CHANGE_INPUT_SUCCESS: (state, { payload }) => ({ ...state, result: payload.text }),
    READ_PHONES_SUCCESS: (state, { payload }) => ({ ...state, list: payload }),
  },
  INITIAL_STATE(),
)