import { compose, withStateHandlers } from 'recompose'

import Button from 'shared/components/atoms/Button'
import FormText from 'shared/components/molecules/FormText'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default compose(
  withStateHandlers(
    { username: '', password: '' },
    {
      onChange: state => e => ({ ...state, [e.target.name]: e.target.value }),
      onSubmit: ({ username, password }, { login }) => () => login(username, password),
    },
  ),
)(props => {
  const { username, password, onChange, onSubmit, errors = {} } = props
  return (
    <div className={loadClass`root`}>
      <h2 className={loadClass`title`}>Sign In</h2>
      <FormText
        className={loadClass`input`}
        name="username"
        maxLength={20}
        placeholder="Please enter username"
        value={username}
        errorMessage={errors.username}
        onChange={onChange}
      />
      <FormText
        className={loadClass`input`}
        name="password"
        maxLength={20}
        placeholder="Please enter password"
        type="password"
        value={password}
        errorMessage={errors.password}
        onChange={onChange}
      />
      <Button className={loadClass`button`} size="large" onClick={onSubmit}>
        Sign In
      </Button>
    </div>
  )
})