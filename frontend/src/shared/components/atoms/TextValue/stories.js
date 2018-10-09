import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import TextValue from './'

storiesOf('ATOMS|TextValue', module)
  .add('default', () => <TextValue>TextValue</TextValue>)
  .add('ellipsis', () => (
    <TextValue ellipsis style={{ width: '100px' }}>TextValue TextValue TextValue</TextValue>
  ))
  .add('align', () => (
    <>
      <TextValue align="left">left - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue align="center">center - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue align="right">right - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue align="justify">justify - TextValue</TextValue>
      <RowSeparateLine />
    </>
  ))
  .add('weight', () => (
    <>
      <TextValue weight="bold">bold - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue weight="lighter">lighter - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue weight="bolder">bolder - TextValue</TextValue>
      <RowSeparateLine />
    </>
  ))
  .add('transform', () => (
    <>
      <TextValue transform="uppercase">uppercase - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue transform="lowercase">lowercase - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue transform="capitalize">capitalize - TextValue</TextValue>
      <RowSeparateLine />
    </>
  ))
  .add('decoration', () => (
    <>
      <TextValue decoration="overline">overline - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue decoration="underline">underline - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue decoration="line-through">line-through - TextValue</TextValue>
      <RowSeparateLine />
    </>
  ))
  .add('color', () => (
    <>
      <TextValue color="primary">primary - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="secondary">secondary - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="success">success - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="danger">danger - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="warning">warning - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="info">info - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="light">light - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue color="dark">dark - TextValue</TextValue>
      <RowSeparateLine />
    </>
  ))
  .add('size', () => (
    <>
      <TextValue size="small">small - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue size="medium">medium - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue size="large">large - TextValue</TextValue>
      <RowSeparateLine />
      <TextValue size="x_large">x_large - TextValue</TextValue>
      <RowSeparateLine />
    </>
  ))