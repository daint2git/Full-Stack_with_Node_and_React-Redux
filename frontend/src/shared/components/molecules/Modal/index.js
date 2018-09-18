import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Overlay from 'shared/components/atoms/Overlay'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Header = ({ children, onClose }) => (
  <div className={loadClass`header`}>
    {children}
    <FontAwesomeIcon
      icon="times"
      size="lg"
      className={loadClass`icon`}
      onClick={onClose}
    />
  </div>
)

const Presentational = ({ fixedWidth, title, children, onClose }) => (
  <>
    <Overlay type="modal" onClick={onClose} />
    <div className={loadClass`root animation`} style={{ width: fixedWidth }}>
      <Header onClose={onClose}>{title}</Header>
      <div className={loadClass`content`}>{children}</div>
    </div>
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
    fixedWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    isOpened: false,
    fixedWidth: 500,
  }
}

export default Modal