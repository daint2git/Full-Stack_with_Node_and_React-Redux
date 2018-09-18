import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Overlay from 'shared/components/atoms/Overlay'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const ModalHeader = ({ classes, children, onClose }) => (
  <div className={loadClass`header ${classes}`}>
    <div className={loadClass`title`}>{children}</div>
    <FontAwesomeIcon
      className={loadClass`icon`}
      icon="times"
      size="lg"
      onClick={onClose}
    />
  </div>
)

export const ModalBody = ({ classes, children }) => (
  <div className={loadClass`body ${classes}`}>{children}</div>
)

export const ModalFooter = ({ classes, children }) => (
  <div className={loadClass`footer ${classes}`}>{children}</div>
)

const Presentational = ({ classes, children, onClose, ...other }) => (
  <>
    <Overlay type="modal" onClick={onClose} />
    <div className={loadClass`root animation ${classes}`} {...other}>
      {children}
    </div>
  </>
)

class Modal extends Component {
  constructor(props) {
    super(props)
    this.parentSelector = document.body
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

  render() {
    return !this.state.isOpened
      ? null
      : ReactDOM.createPortal(<Presentational {...this.props} />, this.node)
  }

  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    classes: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    isOpened: false,
  }
}

export default Modal