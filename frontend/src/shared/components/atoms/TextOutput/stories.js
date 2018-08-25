import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import TextOutput from '../TextOutput'

storiesOf('TextOutput', module)
  .add('default', () => <TextOutput>TextOutput</TextOutput>)
  .add('ellipsis', () => (
    <TextOutput ellipsis style={{ width: '100px' }}>TextOutput TextOutput TextOutput</TextOutput>
  ))
  .add('align', () => (
    <>
      <TextOutput align="left">left - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput align="right">right - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput align="center">center - TextOutput</TextOutput>
      <RowSeparateLine />
    </>
  ))
  .add('weight', () => (
    <>
      <TextOutput weight="bold">bold - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput weight="lighter">lighter - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput weight="bolder">bolder - TextOutput</TextOutput>
      <RowSeparateLine />
    </>
  ))
  .add('decoration', () => (
    <>
      <TextOutput decoration="overline">overline - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput decoration="underline">underline - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput decoration="line-through">line-through - TextOutput</TextOutput>
      <RowSeparateLine />
    </>
  ))
  .add('transform', () => (
    <>
      <TextOutput transform="uppercase">uppercase - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput transform="lowercase">lowercase - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput transform="capitalize">capitalize - TextOutput</TextOutput>
      <RowSeparateLine />
    </>
  ))
  .add('color', () => (
    <>
      <TextOutput color="primary">primary - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="secondary">secondary - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="success">success - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="info">info - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="warning">warning - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="danger">danger - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="light">light - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput color="dark">dark - TextOutput</TextOutput>
      <RowSeparateLine />
    </>
  ))
  .add('size', () => (
    <>
      <TextOutput size="small">small - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput size="medium">medium - TextOutput</TextOutput>
      <RowSeparateLine />
      <TextOutput size="large">large - TextOutput</TextOutput>
      <RowSeparateLine />
    </>
  ))