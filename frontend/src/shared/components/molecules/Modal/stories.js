import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import TextInput from 'shared/components/atoms/TextInput'
import Select from 'shared/components/atoms/Select'
import Spacer from 'shared/components/atoms/Spacer'
import Button from 'shared/components/atoms/Button'
import FormField, { FieldLabel } from 'shared/components/molecules/FormField'
import Modal, { Header, Body, Footer } from './'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './stories.scss'

const loadClass = cssModuleNameTag(styles)

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

storiesOf('MOLECULES|Modal', module)
  .add('default', () => (
    <EnhancedModal
      render={({ isOpened, onClose, ...other }) => (
        <>
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
                  <Select options={OPTIONS} classes={loadClass`select`} />
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
  .add('center', () => (
    <EnhancedModal
      render={({ isOpened, onClose, ...other }) => (
        <>
          <Button {...other}>Show Modal</Button>
          {isOpened && (
            <Modal onClose={onClose} center>
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
                  <Select options={OPTIONS} classes={loadClass`select`} />
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
  .add('overflow', () => (
    <EnhancedModal
      render={({ isOpened, onClose, ...other }) => (
        <>
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
                  <FieldLabel size="large">Name</FieldLabel>
                  <TextInput
                    placeholder="Please enter username"
                  />
                </FormField>
                <Spacer />
                <FormField>
                  <FieldLabel size="large">Name</FieldLabel>
                  <TextInput
                    placeholder="Please enter username"
                  />
                </FormField>
                <Spacer />
                <FormField>
                  <FieldLabel size="large">Name</FieldLabel>
                  <TextInput
                    placeholder="Please enter username"
                  />
                </FormField>
                <Spacer />
                <FormField>
                  <FieldLabel size="large">Name</FieldLabel>
                  <TextInput
                    placeholder="Please enter username"
                  />
                </FormField>
                <Spacer />
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
                  <Select options={OPTIONS} classes={loadClass`select`} />
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
