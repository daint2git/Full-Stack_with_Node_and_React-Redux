import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import TextValue from 'shared/components/atoms/TextValue'
import TextInput from 'shared/components/atoms/TextInput'
import Select from 'shared/components/atoms/Select'
import Spacer from 'shared/components/atoms/Spacer'
import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import Button from 'shared/components/atoms/Button'
import FormField from 'shared/components/molecules/FormField'
import Modal from '../Modal'

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

storiesOf('Modal', module)
.add('default', () => (
  <EnhancedModal
    render={({ isOpened, onClose, ...other }) => (
      <>
        <Button {...other}>Show Modal</Button>
        <Modal title="Demo modal" isOpened={isOpened} onClose={onClose}>
          <FormField>
            <TextValue size="large">name</TextValue>
            <TextInput
              placeholder="Please enter username"
            />
          </FormField>
          <Spacer />
          <FormField>
            <TextValue size="large">describe</TextValue>
            <TextInput
              placeholder="Please enter describe"
              rows={5}
              multiline
            />
          </FormField>
          <Spacer />
          <FormField>
            <TextValue>price</TextValue>
            <TextInput
              placeholder="Please enter price"
            />
          </FormField>
          <Spacer />
          <FormField>
            <TextValue>quantity</TextValue>
            <Select options={OPTIONS} classes={loadClass`select`}/>
          </FormField>
          <RowSeparateLine margin={20} />
          <Button size="large">Submit</Button>
        </Modal>
      </>
    )}
  />
))
