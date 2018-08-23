import { storiesOf } from '@storybook/react'

import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import TextOuput from '../TextOuput'

storiesOf('TextOuput', module)
  .add('default', () => (
    <TextOuput>hello TextOuput component</TextOuput>
  ))
  .add('ellipsis', () => (
    <TextOuput ellipsis style={{ width: '100px' }}>hello TextOuput component hello TextOuput component hello TextOuput component</TextOuput>
  ))
  .add('align', () => (
    <>
      <TextOuput align="left">left - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput align="right">right - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput align="center">center - hello TextOuput component</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('weight', () => (
    <>
      <TextOuput weight="bold">bold - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput weight="lighter">lighter - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput weight="bolder">bolder - hello TextOuput component</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('decoration', () => (
    <>
      <TextOuput decoration="overline">overline - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput decoration="underline">underline - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput decoration="line-through">line-through - hello TextOuput component</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('transform', () => (
    <>
      <TextOuput transform="uppercase">uppercase - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput transform="lowercase">lowercase - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput transform="capitalize">capitalize - hello TextOuput component</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('color', () => (
    <>
      <TextOuput color="primary">primary - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="secondary">secondary - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="success">success - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="info">info - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="warning">warning - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="danger">danger - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="light">light - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput color="dark">dark - hello TextOuput component</TextOuput>
      <RowSeparateLine />
    </>
  ))
  .add('size', () => (
    <>
      <TextOuput size="small">small - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput size="medium">medium - hello TextOuput component</TextOuput>
      <RowSeparateLine />
      <TextOuput size="large">large - hello TextOuput component</TextOuput>
      <RowSeparateLine />
    </>
  ))