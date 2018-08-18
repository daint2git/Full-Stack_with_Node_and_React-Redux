import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import Span from './'

storiesOf('Span', module)
  .add('default', () => (
    <Span>Hello Span</Span>
  ))
  .add('ellipsis', () => (
    <Span ellipsis style={{ width: '100px' }}>Hello Span Hello Span Hello Span</Span>
  ))
  .add('align', () => (
    <>
      <Span align="left">left - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span align="right">right - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span align="center">center - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
    </>
  ))
  .add('weight', () => (
    <>
      <Span weight="bold">bold - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span weight="lighter">lighter - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
    </>
  ))
  .add('color', () => (
    <>
      <Span color="primary">primary - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="secondary">secondary - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="success">success - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="info">info - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="warning">warning - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="danger">danger - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="light">light - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span color="dark">dark - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
    </>
  ))
  .add('size', () => (
    <>
      <Span size="small">small - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span size="medium">medium - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
      <Span size="large">large - Hello Span</Span>
      <RowSeparateLine style={{ margin: '5px auto' }} />
    </>
  ))