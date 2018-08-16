import { createAction, handleActions } from 'redux-actions'

const ROOT = '@@redux-effects-loading'
export const preventSubmit = createAction(`${ROOT}/PREVENT_SUBMIT`)
export const startLoading = createAction(`${ROOT}/START_LOADING`)
export const stopLoading = createAction(`${ROOT}/STOP_LOADING`)

const INITIAL_STATE = () => ({
  shouldPreventSubmit: false,
  loading: false,
})

export default handleActions(
  {
    [`${ROOT}/PREVENT_SUBMIT`]: () => ({ shouldPreventSubmit: true, loading: false }),
    [`${ROOT}/START_LOADING`]: () => ({ shouldPreventSubmit: true, loading: true }),
    [`${ROOT}/STOP_LOADING`]: () => ({ shouldPreventSubmit: false, loading: false }),
  },
  INITIAL_STATE()
)