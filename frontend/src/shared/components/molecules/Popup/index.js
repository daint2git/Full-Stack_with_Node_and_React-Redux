import { Component } from 'react'
import PropTypes from 'prop-types'
import either from 'shared/components/utils/either'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = ({ children }) => (
  <div className={loadClass`root`}>
    <div className={loadClass`content`}>{children}</div>
  </div>
)

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpened: this.props.isOpened }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isOpened !== undefined && !prevState.isOpened) return { isOpened: false }
    if (nextProps.isOpened) return { isOpened: nextProps.isOpened }
    return null
  }

  closing = () => {
    either(this.props.onClose)(() => this.setState({ isOpened: false }))()
  }

  componentDidMount() {
    if (this.props.autoClose) setTimeout(() => this.closing(), 1000)
  }

  render() {
    return !this.state.isOpened ? null : <Presentational {...this.props} />
  }

  static propTypes  = {
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    isOpened: false,
  }
}

export default Popup