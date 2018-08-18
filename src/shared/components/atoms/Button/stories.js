import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import Button from './'

storiesOf('Button', module)
  .add('default', () => (
    <Button>Hello Button</Button>
  ))
  .add('some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled>disabled</Button>
  ))
  .add('hidden', () => (
    <Button hidden>hidden</Button>
  ))
  .add('add className', () => (
    <Button className="test1 test2">add className</Button>
  ))
  .add('click', () => (
    <Button onClick={() => alert('Clicked')}>Clicked</Button>
  ))
  .add('type', () => (
    <>
      <Button type="primary">primary - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="success">success - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="info">info - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="warning">warning - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="danger">danger - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="secondary">secondary - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="dark">dark - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="light">light - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
    </>
  ))
  .add('size', () => (
    <>
      <Button size="small">small - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button size="medium">medium - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button size="large">large - Hello Button</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
    </>
  ))