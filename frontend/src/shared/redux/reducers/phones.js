import { steps } from 'redux-effects-steps'
import { fetch } from './utils/axios'
import { createAction, handleActions, handleAction } from './utils'

const readPhonesSuccess = createAction('READ_PHONES_SUCCESS')
export const readPhones = request =>
  steps(
    fetch({ method: 'get', url: 'phones', ...request }),
    [readPhonesSuccess],
  )

const createPhoneSuccess = createAction('CREATE_PHONE_SUCCESS')
export const createPhone =() =>
  steps(
    fetch({ method: 'post', url: 'phones', data: 'abc' }),
    [createPhoneSuccess],
  )

export const INITIAL_STATE = () => ({
  list: [],
})

export default handleActions(
  [
    handleAction(readPhonesSuccess, (state, payload) => ({ ...state, list: payload })),
    handleAction(createPhoneSuccess, state => ({ ...state })),
  ],
  INITIAL_STATE(),
)