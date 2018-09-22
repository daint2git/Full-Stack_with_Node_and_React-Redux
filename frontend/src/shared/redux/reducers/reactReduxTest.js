import { steps } from 'redux-effects-steps'
import { fetch } from './utils/axios'
import { createAction, handleActions } from 'redux-actions'

const changeInputSuccess = createAction('CHANGE_INPUT_SUCCESS')
export const changeInput = text => changeInputSuccess({ text })

const readProductsSuccess = createAction('READ_PRODUCTS_SUCCESS')
export const readProducts = request =>
  steps(
    fetch({ method: 'get', url: 'products', ...request }),
    [readProductsSuccess],
  )

export const INITIAL_STATE = () => ({
  result: '',
  list: [],
})

export default handleActions(
  {
    CHANGE_INPUT_SUCCESS: (state, { payload }) => ({ ...state, result: payload.text }),
    READ_PRODUCTS_SUCCESS: (state, { payload }) => ({ ...state, list: payload }),
  },
  INITIAL_STATE(),
)