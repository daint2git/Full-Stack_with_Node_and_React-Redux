import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import Button from 'shared/components/atoms/Button'
import Modal, { Header, Body, Footer } from 'shared/components/molecules/Modal'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const ConfirmModal = ({ title, children, onClick, onClose }) => (
  <Modal onClose={onClose} center>
    <Header onClose={onClose}>{title}</Header>
    <Body>{children}</Body>
    <Footer>
      <Button size="large" type="danger" onClick={onClick}>OK</Button>
      <Button size="large" type="light" onClick={onClose}>CANCEL</Button>
    </Footer>
  </Modal>
)

const EnhancedComponent = compose(
  defaultProps({ margin: 10 }),
  setPropTypes({ margin: PropTypes.number }),
  mapProps(({ margin, ...other }) => ({
    ...other,
  })),
)(ConfirmModal)

export default EnhancedComponent