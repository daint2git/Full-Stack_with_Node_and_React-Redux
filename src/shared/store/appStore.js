import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { loadingMiddleware } from 'shared/store/middlewares/redux-effects-loading'
import { axiosMiddleware, AXIOS } from 'shared/store/middlewares/redux-effects-axios'
import { countCallApiMiddleware } from 'shared/store/middlewares/redux-effects-countCallApi'
import stepsMiddleware from 'redux-effects-steps'
import { ReduxEmitter } from 'kuker-emitters'

import rootReducer from 'shared/store/reducers/rootReducer'

export default function(options = {}) {
  const initalState = {}
  const middlewares = [
    routerMiddleware(options.history),
    loadingMiddleware([AXIOS]),
    countCallApiMiddleware([AXIOS]),
    axiosMiddleware,
    stepsMiddleware,
    ReduxEmitter(),
  ]
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, initalState, enhancer)

  return store
}