import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = ({ store, ...rest }) => (
  <Provider store={store}>
    <Router {...rest} />
  </Provider>
)

export default Root