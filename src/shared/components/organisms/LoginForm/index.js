import { compose, withStateHandlers } from 'recompose'

import { onChange } from 'shared/components/utils/handleEvents'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import FormText from 'shared/components/molecules/FormText'
import FormError from 'shared/components/molecules/FormError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default compose(
  withStateHandlers(
    { username: '', password: '' },
    {
      onChange,
      onSubmit: ({ username, password }, { login }) => () => login(username, password),
    },
  ),
)(({
  username,
  password,
  onChange,
  onSubmit,
  errors = {},
}) => (
  <div className={loadClass`root`}>
    <h2 className={loadClass`title`}>Sign In</h2>
    <FormText
      classes={loadClass`input`}
      name="username"
      maxLength={20}
      placeholder="Please enter username"
      value={username}
      errorMessage={errors.username}
      onChange={onChange}
    />
    <Spacer />
    <FormText
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
    <Button classes={loadClass`button`} size="large" onClick={onSubmit}>Sign In</Button>
  </div>
))