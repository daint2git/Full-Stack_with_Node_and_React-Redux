import { compose, withStateHandlers } from 'recompose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import Heading from 'shared/components/atoms/Heading'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import TextValue from 'shared/components/atoms/TextValue'
import Link from 'shared/components/atoms/Link'
import FormTextInput from 'shared/components/molecules/FormTextInput'
import FormError from 'shared/components/molecules/FormError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const LoginForm = ({ email, password, errors = {}, onChange, onSubmit }) => (
  <WrapLayout classes={loadClass`root`}>
    <Heading classes={loadClass`title`} component="h1">
      Log in to your account
    </Heading>
    <Group classes={loadClass`form-field`}>
      <div className={loadClass`icon`}>
        <FontAwesomeIcon icon="user" size="lg" />
      </div>
      <FormTextInput
        type="text"
        classes={loadClass`input`}
        name="email"
        maxLength={30}
        placeholder="Please enter email"
        value={email}
        errorMessage={errors.email}
        onChange={onChange}
      />
    </Group>
    <Spacer />
    <Group classes={loadClass`form-field`}>
      <div className={loadClass`icon`}>
        <FontAwesomeIcon icon="lock" size="lg" />
      </div>
      <FormTextInput
        type="password"
        classes={loadClass`input`}
        name="password"
        maxLength={30}
        placeholder="Please enter password"
        value={password}
        errorMessage={errors.password}
        onChange={onChange}
      />
    </Group>
    <FormError errorMessage={errors.reason} />
    <Spacer />
    <Button classes={loadClass`button`} size="large" onClick={onSubmit}>
      Log in
    </Button>
    <Spacer />
    <TextValue align="center" size="large">
      Don't have account?&nbsp;
      <Link href="#">Sign Up</Link>
    </TextValue>
  </WrapLayout>
)

export default compose(
  withStateHandlers(
    { email: '', password: '' },
    {
      onChange: state => e => ({ ...state, [e.target.name]: e.target.value }),
      onSubmit: ({ email, password }, { login }) => () => login(email, password),
    },
  ),
)(LoginForm)
