import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = ({ store, ...other }) => (
  <Provider store={store}>
    <Router {...other} />
  </Provider>
)

const EnhancedComponent = compose(setPropTypes({ store: PropTypes.object.isRequired }))(Root)

export default EnhancedComponent
