import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Overlay from 'shared/components/atoms/Overlay'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const Header = ({ classes, children, onClose }) => (
  <div className={loadClass`header ${classes}`}>
    <div className={loadClass`title`}>{children}</div>
    <FontAwesomeIcon
      className={loadClass`icon animation-icon`}
      icon="times"
      size="lg"
      onClick={onClose}
    />
  </div>
)

export const Body = ({ classes, children }) => (
  <div className={loadClass`body ${classes}`}>{children}</div>
)

export const Footer = ({ classes, children }) => (
  <div className={loadClass`footer ${classes}`}>{children}</div>
)

class Modal extends Component {
  constructor(props) {
    super(props)
    this.parentSelector = document.body
    this.node = document.createElement('div')
    this.state = { prevPageYOffset: 0 }
  }

  changeScrollYPosition = pageYOffset => window.scrollTo(0, pageYOffset)

  componentDidMount() {
    this.parentSelector.appendChild(this.node)
    const prevPageYOffset = window.pageYOffset
    if (prevPageYOffset) {
      this.changeScrollYPosition(0)
      this.setState({ prevPageYOffset })
    }
  }

  componentWillUnmount() {
    this.parentSelector.removeChild(this.node)
    const { prevPageYOffset } = this.state
    if (prevPageYOffset) {
      this.changeScrollYPosition(prevPageYOffset)
    }
  }

  render() {
    const { classes, center, children, onClose } = this.props
    return ReactDOM.createPortal(
      <>
        <Overlay type="modal" onClick={onClose} />
        <div className={loadClass`root animation-modal ${classes}`} data-center={center}>
          {children}
        </div>
      </>,
      this.node
    )
  }

  static propTypes = {
    classes: PropTypes.string,
    center: PropTypes.bool,
    onClose: PropTypes.func,
  }
}

export default Modal