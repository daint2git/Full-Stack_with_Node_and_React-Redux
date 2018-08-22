import { withPropsOnChange, withStateHandlers } from 'recompose'
import Button from 'shared/components/atoms/Button'
import Span from 'shared/components/atoms/Span'
import Spacer from 'shared/components/atoms/Spacer'
import Heading from 'shared/components/atoms/Heading'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const WithPropsOnChange =  withPropsOnChange(
  ['counter'], props => ({...props}),
)(({ title, counter }) => (
  <>
    <Span>{`Title: ${title}`}</Span>
    <Span>{`Counter: ${counter}`}</Span>
  </>
))

export default withStateHandlers(
  { counter: 0 },
  {
    increment: ({ counter }) => value => ({ counter: counter + value }),
    decrement: ({ counter }) => value => ({ counter: counter - value }),
  },
)(({ counter, increment, decrement }) => (
  <div className={loadClass`root`}>
    <Heading HSize="h3">withPropsOnChange</Heading>
    <div className={loadClass`buttons`}>
      <Button onClick={() => increment(1)}>increment</Button>
      <Button type="info" onClick={() => decrement(1)}>decrement</Button>
    </div>
    <Spacer padding={5} />
    <WithPropsOnChange title={`render withPropsOnChange 1`} counter={counter} />
    <Spacer padding={5} />
    <WithPropsOnChange title={`render withPropsOnChange 2`} counter={0} />
  </div>
))