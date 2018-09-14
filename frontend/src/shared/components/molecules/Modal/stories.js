import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import Button from 'shared/components/atoms/Button'
import Modal from '../Modal'

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
        <Modal title="Demo modal" width={500} isOpened={isOpened} onClose={onClose}>
          <Button>AAAAA</Button>
          <Button>BBBBB</Button>
          <Button>CCCCC</Button>
          <Button>DDDDD</Button>
        </Modal>
      </>
    )}
  />
))
