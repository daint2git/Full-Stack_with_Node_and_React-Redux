import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from 'shared/redux/reducers/auth'

import LoginForm from 'shared/components/organisms/LoginForm'
import LoginLayout from 'shared/components/templates/LoginLayout'

const Login = props => (
  <LoginLayout>
    <LoginForm {...props} />
  </LoginLayout>
)

export default compose(
  connect(
    state => ({ errors: state.auth.errors }),
    dispacth => bindActionCreators({ login }, dispacth),
  ),
)(Login)