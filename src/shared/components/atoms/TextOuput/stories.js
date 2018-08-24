import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import TextOuput from '../TextOuput'

storiesOf('TextOuput', module)
  .add('default', () => <TextOuput>TextOuput</TextOuput>)
  .add('ellipsis', () => (
    <TextOuput ellipsis style={{ width: '100px' }}>TextOuput TextOuput TextOuput</TextOuput>
  ))
  .add('align', () => (
    <>
      <TextOuput align="left">left - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput align="right">right - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput align="center">center - TextOuput</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('weight', () => (
    <>
      <TextOuput weight="bold">bold - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput weight="lighter">lighter - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput weight="bolder">bolder - TextOuput</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('decoration', () => (
    <>
      <TextOuput decoration="overline">overline - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput decoration="underline">underline - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput decoration="line-through">line-through - TextOuput</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('transform', () => (
    <>
      <TextOuput transform="uppercase">uppercase - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput transform="lowercase">lowercase - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput transform="capitalize">capitalize - TextOuput</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('color', () => (
    <>
      <TextOuput color="primary">primary - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="secondary">secondary - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="success">success - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="info">info - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="warning">warning - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="danger">danger - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="light">light - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput color="dark">dark - TextOuput</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('size', () => (
    <>
      <TextOuput size="small">small - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput size="medium">medium - TextOuput</TextOuput>
      <RowSeparateLine />
      <TextOuput size="large">large - TextOuput</TextOuput>
      <RowSeparateLine />
    </>
  ))