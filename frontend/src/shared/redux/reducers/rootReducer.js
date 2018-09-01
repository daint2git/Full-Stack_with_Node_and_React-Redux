import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { loadingReducer as loading } from 'shared/redux/middlewares/redux-effects-loading'
import { countCallApiReducer as countCallApi } from 'shared/redux/middlewares/redux-effects-countCallApi'
import auth from './auth'
import phones from './phones'
import reactReduxTest from './reactReduxTest'

export default combineReducers({
  routing,
  loading,
  countCallApi,
  auth,
  phones,
  reactReduxTest,
})