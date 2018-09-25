import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { loadingMiddleware } from 'shared/redux/middlewares/redux-effects-loading'
import { axiosMiddleware, AXIOS } from 'shared/redux/middlewares/redux-effects-axios'
import stepsMiddleware from 'redux-effects-steps'
import { ReduxEmitter } from 'kuker-emitters'

import rootReducer from 'shared/redux/reducers/rootReducer'

const appStore = (options = {}, initalState = {}) => {
  const middlewares = [
    routerMiddleware(options.history),
    loadingMiddleware([AXIOS]),
    axiosMiddleware,
    stepsMiddleware,
    ReduxEmitter(),
  ]
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, initalState, enhancer)

  return store
}

export default appStore