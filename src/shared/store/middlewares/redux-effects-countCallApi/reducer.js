import { createAction, handleActions } from 'redux-actions'

const ROOT = '@@redux-effects-countCallAPI'
export const count = createAction(`${ROOT}/COUNT`)

const INITIAL_STATE = () => ({
  count: 0,
})

export default handleActions(
  {
    [`${ROOT}/COUNT`]: state => ({ count: state.count + 1 }),
  },
  INITIAL_STATE()
)