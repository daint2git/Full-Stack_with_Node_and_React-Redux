import React from 'react'
import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import Button from './'

storiesOf('Button', module)
  .add('text', () => (
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
  .add('add className', () => (
    <Button className="test1 test2">add className</Button>
  ))
  .add('click', () => (
    <Button onClick={() => alert('Clicked')}>Clicked</Button>
  ))
  .add('type', () => (
    <>
      <Button type="primary">primary</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="success">success</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="info">info</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="warning">warning</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="danger">danger</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="secondary">secondary</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="dark">dark</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button type="light">light</Button>
    </>
  ))
  .add('size', () => (
    <>
      <Button size="small">small</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button size="medium">medium</Button>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Button size="large">large</Button>
    </>
  ))