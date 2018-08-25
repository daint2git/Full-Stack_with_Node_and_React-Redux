import { withPropsOnChange, withStateHandlers } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import Button from 'shared/components/atoms/Button'
import TextOutput from 'shared/components/atoms/TextOutput'
import Spacer from 'shared/components/atoms/Spacer'
import Heading from 'shared/components/atoms/Heading'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const WithPropsOnChange =  withPropsOnChange(
  ['counter'], props => ({ ...props }),
)(({ title, counter }) => (
  <Group>
    <TextOutput>{`Title: ${title}`}</TextOutput>
    <TextOutput>{`Counter: ${counter}`}</TextOutput>
  </Group>
))

const ComponentTest = ({ counter, increment, decrement }) => (
  <WrapLayout>
    <Heading component="h3">withPropsOnChange</Heading>
    <Group classes={loadClass`buttons`}>
      <Button onClick={() => increment(1)}>increment</Button>
      <Button type="info" onClick={() => decrement(1)}>decrement</Button>
    </Group>
    <Spacer padding={5} />
    <WithPropsOnChange title="render withPropsOnChange 1" counter={counter} />
    <Spacer padding={5} />
    <WithPropsOnChange title="render withPropsOnChange 2" counter={0} />
  </WrapLayout>
)

export default withStateHandlers(
  { counter: 0 },
  {
    increment: ({ counter }) => value => ({ counter: counter + value }),
    decrement: ({ counter }) => value => ({ counter: counter - value }),
  },
)(ComponentTest)