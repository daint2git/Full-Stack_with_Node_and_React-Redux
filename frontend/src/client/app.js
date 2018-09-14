import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import 'shared/components/utils/root.scss'
import 'shared/components/utils/loadFortawesome.js'
import appStore from 'shared/redux/appStore'
import appRoutes from 'shared/routes/appRoutes'
import Root from './Root'

const store = appStore(
  {
    cookie: [],
    history: browserHistory,
  }
)
const history = syncHistoryWithStore(browserHistory, store)
const routes = appRoutes(store)

render(<Root store={store} history={history} routes={routes} />, document.getElementById('root'))