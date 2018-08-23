import { compose, withStateHandlers } from 'recompose'

import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import FormTextInput from 'shared/components/molecules/FormTextInput'
import FormError from 'shared/components/molecules/FormError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const LoginForm = ({
  username,
  password,
  onChange,
  onSubmit,
  errors = {},
}) => (
  <div className={loadClass`root`}>
    <h2 className={loadClass`title`}>Sign In</h2>
    <FormTextInput
      classes={loadClass`input`}
      name="username"
      maxLength={20}
      placeholder="Please enter username"
      value={username}
      errorMessage={errors.username}
      onChange={onChange}
    />
    <Spacer />
    <FormTextInput
      classes={loadClass`input`}
      name="password"
      maxLength={20}
      placeholder="Please enter password"
      type="password"
      value={password}
      errorMessage={errors.password}
      onChange={onChange}
    />
    <FormError errorMessage={errors.reason} />
    <Spacer />
    <Button
      classes={loadClass`button`}
      size="large"
      onClick={onSubmit}
    >
      Sign In
    </Button>
  </div>
)

export default compose(
  withStateHandlers(
    { username: '', password: '' },
    {
      onChange: state => e => ({ ...state, [e.target.name]: e.target.value }),
      onSubmit: ({ username, password }, { login }) => () => login(username, password),
    },
  ),
)(LoginForm)