import { Component } from 'react'
import PropTypes from 'prop-types'
import either from 'shared/components/utils/either'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

class Popup extends Component {
  state = { isOpened: true }

  static propTypes = {
    classes: PropTypes.string,
    autoClose: PropTypes.bool,
    onClose: PropTypes.func,
  }

  closing = () => either(this.props.onClose)(() => this.setState({ isOpened: false }))()

  componentDidMount() {
    if (this.props.autoClose) setTimeout(() => this.closing(), 1000)
  }

  render() {
    const { classes, children } = this.props
    return (
      this.state.isOpened && (
        <div className={loadClass`root ${classes}`}>
          <div className={loadClass`content`}>{children}</div>
        </div>
      )
    )
  }
}

export default Popup
