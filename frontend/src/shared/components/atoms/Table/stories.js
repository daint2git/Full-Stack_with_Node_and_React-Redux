import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import TextInput from 'shared/components/atoms/TextInput'
import Select from 'shared/components/atoms/Select'
import Spacer from 'shared/components/atoms/Spacer'
import Button from 'shared/components/atoms/Button'
import FormField, { FieldLabel } from 'shared/components/molecules/FormField'
import Modal, { Header, Body, Footer } from 'shared/components/molecules/Modal'
import  { Table, Head, Body as TableBody, Row, Cell } from './'

const OPTIONS = [
  { value: '1', children: '1'},
  { value: '2', children: '2'},
  { value: '3', children: '3'},
]

const EnhancedModal = withStateHandlers(
  { isOpened: false },
  {
    onClick: state => () => ({ ...state, isOpened: true }) ,
    onClose: state => () => ({ ...state, isOpened: false })
  }
)(({ render, ...other }) => render(other))

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
      <TableBody>
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
      </TableBody>
    </Table>
  ))
  .add('table + modal', () => (
    <EnhancedModal
      render={({ isOpened, onClose, ...other }) => (
        <>
          <Table>
            <Head>
              <Row>
                <Cell>head 1</Cell>
                <Cell>head 2</Cell>
                <Cell align="right">head 3</Cell>
                <Cell>head 4</Cell>
              </Row>
            </Head>
            <TableBody>
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
            </TableBody>
          </Table>
          <Button {...other}>Show Modal</Button>
          {isOpened && (
            <Modal onClose={onClose}>
              <Header onClose={onClose}>Demo modal</Header>
              <Body>
                <FormField>
                  <FieldLabel size="large">Name</FieldLabel>
                  <TextInput
                    placeholder="Please enter username"
                  />
                </FormField>
                <Spacer />
                <FormField>
                  <FieldLabel size="large">Describe</FieldLabel>
                  <TextInput
                    placeholder="Please enter describe"
                    rows={5}
                    multiline
                  />
                </FormField>
                <Spacer />
                <FormField>
                  <FieldLabel>Price</FieldLabel>
                  <TextInput
                    placeholder="Please enter price"
                  />
                </FormField>
                <Spacer />
                <FormField>
                  <FieldLabel>Quantity</FieldLabel>
                  <Select options={OPTIONS} />
                </FormField>
              </Body>
              <Footer>
                <Button size="large">Submit</Button>
                <Button size="large" type="info">Reset</Button>
              </Footer>
            </Modal>
          )}
        </>
      )}
    />
  ))