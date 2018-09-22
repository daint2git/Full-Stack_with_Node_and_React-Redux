import { compose, withStateHandlers } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import TextInput from 'shared/components/atoms/TextInput'
import TextValue from 'shared/components/atoms/TextValue'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import repeatComponent from 'shared/components/utils/repeatComponent'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Products = ({ name, price }) => (
  <WrapLayout>
    <TextValue>{`name: ${name}`}</TextValue>
    <TextValue>{`price: ${price}`}</TextValue>
  </WrapLayout>
)

const Productss = repeatComponent(Products)

const ReactReduxTestContent = ({ result, list, input, changeInput, readProducts, onChange }) => (
  <WrapLayout>
    <TextInput name="input" value={input} onChange={onChange} />
    <Spacer padding={5} />
    <Group classes={loadClass`buttons`}>
      <Button onClick={() => changeInput(input)}>Click</Button>
      <Button onClick={readProducts}>Click</Button>
    </Group>
    <Spacer padding={5} />
    <TextValue>{result}</TextValue>
    <Spacer padding={5} />
    <Productss list={list} />
  </WrapLayout>
)

export default compose(
  withStateHandlers(
    { input: '' },
    { onChange: state => e => ({ ...state, [e.target.name]: e.target.value }) },
  )
)(ReactReduxTestContent)