import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { loadingReducer as loading } from 'shared/redux/middlewares/redux-effects-loading'
import auth from './auth'
import products from './products'
import reactReduxTest from './reactReduxTest'

export default combineReducers({
  routing,
  loading,
  auth,
  products,
  reactReduxTest,
})