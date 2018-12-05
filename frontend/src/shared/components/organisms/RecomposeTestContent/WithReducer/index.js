import { withReducer } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import Heading from 'shared/components/atoms/Heading'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import TextValue from 'shared/components/atoms/TextValue'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const INCREAMENT = 'INCREAMENT'
const DECREAMENT = 'DECREAMENT'

const WithReducer = ({ state: { counter }, dispatch }) => (
  <WrapLayout>
    <Heading component="h3">withReducer</Heading>
    <Group classes={loadClass`buttons`}>
      <Button onClick={() => dispatch({ type: INCREAMENT, value: 1 })}>increment</Button>
      <Button type="info" onClick={() => dispatch({ type: DECREAMENT, value: 1 })}>
        decrement
      </Button>
    </Group>
    <Spacer padding={5} />
    <TextValue>{`Counter: ${counter}`}</TextValue>
  </WrapLayout>
)

export default withReducer(
  'state',
  'dispatch',
  (state, action) => {
    const { type, value } = action
    switch (type) {
      case INCREAMENT:
        return { ...state, counter: state.counter + value }
      case DECREAMENT:
        return { ...state, counter: state.counter - value }
      default:
        return state
    }
  },
  { counter: 0 },
)(WithReducer)
