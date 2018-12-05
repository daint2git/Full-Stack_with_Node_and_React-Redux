import { createAction, handleAction } from '../redux-utils'

const ROOT = '@@redux-effects-countCallAPI'
export const count = createAction(`${ROOT}/COUNT`)

export default handleAction(count, state => ({ count: state.count + 1 }), { count: 0 })
