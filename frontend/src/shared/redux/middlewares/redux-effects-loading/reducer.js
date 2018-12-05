import { createAction, handleActions, handleAction } from '../redux-utils'

const ROOT = '@@redux-effects-loading'
export const preventSubmit = createAction(`${ROOT}/PREVENT_SUBMIT`)
export const startLoading = createAction(`${ROOT}/START_LOADING`)
export const stopLoading = createAction(`${ROOT}/STOP_LOADING`)

const INITIAL_STATE = () => ({
  shouldPreventSubmit: false,
  loading: false,
})

export default handleActions(
  [
    handleAction(preventSubmit, () => ({ shouldPreventSubmit: true, loading: false })),
    handleAction(startLoading, () => ({ shouldPreventSubmit: true, loading: true })),
    handleAction(stopLoading, () => ({ shouldPreventSubmit: false, loading: false })),
  ],
  INITIAL_STATE(),
)
