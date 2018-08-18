import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { loadingReducer as loading } from 'shared/store/middlewares/redux-effects-loading'
import { countCallApiReducer as countCallApi } from 'shared/store/middlewares/redux-effects-countCallApi'
import reactReduxTest from './reactReduxTest'

export default combineReducers({
  routing,
  loading,
  countCallApi,
  reactReduxTest,
})