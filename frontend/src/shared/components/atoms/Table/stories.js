import { storiesOf } from '@storybook/react'

import  { Table, Head, Body, Row, Cell } from './'

storiesOf('Table', module)
  .add('default', () => (
    <Table>
      <Head>
        <Row>
          <Cell>head 1</Cell>
          <Cell>head 2</Cell>
          <Cell align="right">head 3</Cell>
          <Cell>head 4</Cell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell>data 1</Cell>
          <Cell>data 2</Cell>
          <Cell align="right">data 3</Cell>
          <Cell>data 4</Cell>
        </Row>
        <Row>
          <Cell>data 1</Cell>
          <Cell>data 2</Cell>
          <Cell align="right">data 3</Cell>
          <Cell>data 4</Cell>
        </Row>
        <Row>
          <Cell>data 1</Cell>
          <Cell>data 2</Cell>
          <Cell align="right">data 3</Cell>
          <Cell>data 4</Cell>
        </Row>
      </Body>
    </Table>
  ))