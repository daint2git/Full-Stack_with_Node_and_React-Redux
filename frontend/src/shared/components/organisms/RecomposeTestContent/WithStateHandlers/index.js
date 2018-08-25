import { withStateHandlers } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import Heading from 'shared/components/atoms/Heading'
import TextValue from 'shared/components/atoms/TextValue'
import Spacer from 'shared/components/atoms/Spacer'
import FormTextInput from 'shared/components/molecules/FormTextInput'
import Button from 'shared/components/atoms/Button'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const WithStateHandlers = ({
  counter,
  increment,
  decrement,
  reset,
  inputValue,
  onChangeInputValue,
}) => (
  <WrapLayout>
    <Heading component="h3">withStateHandlers</Heading>
    <TextValue>Input value: </TextValue>
    <Spacer padding={5} />
    <FormTextInput value={inputValue} onChange={onChangeInputValue} />
    <Spacer padding={5} />
    <Group classes={loadClass`buttons`}>
      <Button onClick={() => increment(inputValue)}>increment</Button>
      <Button type="info" onClick={() => decrement(inputValue)}>decrement</Button>
      <Button type="danger" onClick={reset}>reset</Button>
    </Group>
    <Spacer padding={5} />
    <TextValue>{`Counter: ${counter}`}</TextValue>
  </WrapLayout>
)

export default withStateHandlers(
  { counter: 0, inputValue: 0 },
  {
    onChangeInputValue: _ => e => ({ inputValue: parseInt(e.target.value) }),
    increment: ({ counter }) => value => ({ counter: counter + value, inputValue: 0 }),
    decrement: ({ counter }) => value => ({ counter: counter - value, inputValue: 0 }),
    reset: _ => _ => ({ counter: 0, inputValue: 0 }),
  },
)(WithStateHandlers)