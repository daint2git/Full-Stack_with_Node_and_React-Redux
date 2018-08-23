import { withReducer } from 'recompose'

import Heading from 'shared/components/atoms/Heading'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import TextOuput from 'shared/components/atoms/TextOuput'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const INCREAMENT = 'INCREAMENT'
const DECREAMENT = 'DECREAMENT'

const WithReducer = ({ state: { counter }, dispatch }) => (
  <div className={loadClass`root`}>
    <Heading HSize="h3">withReducer</Heading>
    <div className={loadClass`buttons`}>
      <Button onClick={() => dispatch({ type: INCREAMENT, value: 1 })}>increment</Button>
      <Button type="info" onClick={() => dispatch({ type: DECREAMENT, value: 1 })}>decrement</Button>
    </div>
    <Spacer padding={5} />
    <TextOuput>{`Counter: ${counter}`}</TextOuput>
  </div>
)

export default withReducer(
  'state',
  'dispatch',
  (state, action) => {
    const { type, value } = action
    switch(type) {
      case INCREAMENT: return { ...state, counter: state.counter + value }
      case DECREAMENT: return { ...state, counter: state.counter - value }
      default: return state
    }
  },
  { counter: 0 },
)(WithReducer)