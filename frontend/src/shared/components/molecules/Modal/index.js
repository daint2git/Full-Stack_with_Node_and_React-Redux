import { Component } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const parentSelector = document.body

const Header = ({ children, onClose }) => (
  <div className={loadClass`header`}>
    {children}
    <FontAwesomeIcon icon="times" size="lg" onClick={onClose} />
  </div>
)

const ModalComponent = ({ title, width, children, onClose }) => (
  <>
    <div className={loadClass`overlay`} onClick={onClose} />
    <div className={loadClass`root`} style={{ width: width }}>
      <Header onClose={onClose}>{title}</Header>
      <div className={loadClass`content`}>{children}</div>
    </div>
  </>
)

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpened: this.props.isOpened }
  }

  static getDerivedStateFromProps(nextProps) {
    return { isOpened: nextProps.isOpened }
  }

  componentDidMount() {
    this.node = document.createElement('div')
    parentSelector.appendChild(this.node)
  }

  componentWillUnmount() {
    parentSelector.removeChild(this.node)
  }

  render() {
    return this.state.isOpened
      ? ReactDOM.createPortal(<ModalComponent {...this.props} />, this.node)
      : null
  }
}

export default Modal