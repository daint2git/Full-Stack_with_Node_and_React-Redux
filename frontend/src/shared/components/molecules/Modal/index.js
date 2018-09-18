import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Overlay from 'shared/components/atoms/Overlay'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const ModalHeader = ({ children, onClose }) => (
  <div className={loadClass`header`}>
    <div className={loadClass`title`}>{children}</div>
    <FontAwesomeIcon
      icon="times"
      size="lg"
      className={loadClass`icon`}
      onClick={onClose}
    />
  </div>
)

export const ModalBody = ({ children }) => (
  <div className={loadClass`body`}>{children}</div>
)

export const ModalFooter = ({ children }) => (
  <div className={loadClass`footer`}>{children}</div>
)

const Presentational = ({ children, onClose }) => (
  <>
    <Overlay type="modal" onClick={onClose} />
    <div className={loadClass`root animation`}>{children}</div>
  </>
)

class Modal extends Component {
  constructor(props) {
    super(props)
    this.parentSelector = document.body;
    this.node = document.createElement('div')
    this.state = { isOpened: this.props.isOpened }
  }

  static getDerivedStateFromProps(nextProps) {
    return { isOpened: nextProps.isOpened }
  }

  componentDidMount() {
    this.parentSelector.appendChild(this.node)
  }

  componentWillUnmount() {
    this.parentSelector.removeChild(this.node)
  }

  renderPortal = () => ReactDOM.createPortal(
    <Presentational {...this.props} />,
    this.node,
  )

  render() {
    return !this.state.isOpened ? null : this.renderPortal()
  }

  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    isOpened: false,
  }
}

export default Modal