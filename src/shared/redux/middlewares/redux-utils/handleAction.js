import produce from 'immer'
import either from './either'

const handleAction = (targetAction, updater, initalState = {}) => {
  return (state = initalState, action) => {
    const { type, payload } = action
    if (type !== either(targetAction.type)(targetAction))
      return state
    return produce(state, state => updater(state, payload))
  }
}

export default handleAction