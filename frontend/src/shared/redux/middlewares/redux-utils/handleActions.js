const handleActions = (reducers = [], initalState = {}) => {
  return (state = initalState, action) => {
    return reducers.reduce((state, reducer) => reducer(state, action), state)
  }
}

export default handleActions
