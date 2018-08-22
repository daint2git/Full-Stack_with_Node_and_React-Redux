import { withStateHandlers } from 'recompose'

import Heading from 'shared/components/atoms/Heading'
import Span from 'shared/components/atoms/Span'
import Spacer from 'shared/components/atoms/Spacer'
import Text from 'shared/components/atoms/Text'
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
  <div className={loadClass`root`}>
    <Heading HSize="h3">withStateHandlers</Heading>
    <Span>Input value: </Span>
    <Spacer padding={5} />
    <Text value={inputValue} onChange={onChangeInputValue} />
    <Spacer padding={5} />
    <div className={loadClass`buttons`}>
      <Button onClick={() => increment(inputValue)}>increment</Button>
      <Button type="info" onClick={() => decrement(inputValue)}>decrement</Button>
      <Button type="danger" onClick={reset}>reset</Button>
    </div>
    <Spacer padding={5} />
    <Span>{`Counter: ${counter}`}</Span>
  </div>
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