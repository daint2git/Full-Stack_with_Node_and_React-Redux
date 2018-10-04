import { compose, applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { loadingMiddleware } from 'shared/redux/middlewares/redux-effects-loading'
import { axiosMiddleware, AXIOS } from 'shared/redux/middlewares/redux-effects-axios'
import stepsMiddleware from 'redux-effects-steps'

import rootReducer from 'shared/redux/reducers/rootReducer'

const appStore = (initalState = {}, options = {}) => {
  const middlewares = [
    routerMiddleware(options.history),
    loadingMiddleware([AXIOS]),
    axiosMiddleware,
    stepsMiddleware,
  ]

  if (DEVELOPMENT) {
    middlewares.concat(require('kuker-emitters/lib/ReduxEmitter')())
  }

  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, initalState, enhancer)

  return store
}

export default appStore