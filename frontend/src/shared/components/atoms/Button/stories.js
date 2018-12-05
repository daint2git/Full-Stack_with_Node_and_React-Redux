import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import Button from './'

storiesOf('ATOMS|Button', module)
  .add('default', () => <Button>Button</Button>)
  .add('some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('disabled', () => <Button disabled>disabled</Button>)
  .add('hidden', () => <Button hidden>hidden</Button>)
  .add('click', () => <Button onClick={() => alert('Clicked')}>Clicked</Button>)
  .add('type', () => (
    <>
      <Button type="primary">primary - Button</Button>
      <RowSeparateLine />
      <Button type="secondary">secondary - Button</Button>
      <RowSeparateLine />
      <Button type="success">success - Button</Button>
      <RowSeparateLine />
      <Button type="danger">danger - Button</Button>
      <RowSeparateLine />
      <Button type="warning">warning - Button</Button>
      <RowSeparateLine />
      <Button type="info">info - Button</Button>
      <RowSeparateLine />
      <Button type="light">light - Button</Button>
      <RowSeparateLine />
      <Button type="dark">dark - Button</Button>
      <RowSeparateLine />
    </>
  ))
  .add('size', () => (
    <>
      <Button size="small">small - Button</Button>
      <RowSeparateLine />
      <Button size="medium">medium - Button</Button>
      <RowSeparateLine />
      <Button size="large">large - Button</Button>
      <RowSeparateLine />
    </>
  ))
