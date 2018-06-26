import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from 'shared/store/reducers/rootReducer'

export default function(options = {}) {
  const initalState = {}
  const middlewares = [routerMiddleware(options.history)]
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, initalState, enhancer)

  return store
}