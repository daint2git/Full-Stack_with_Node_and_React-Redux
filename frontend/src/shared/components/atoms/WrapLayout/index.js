import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const WrapLayout = ({ classes, children, ...other }) => (
  <div className={loadClass`${classes}`} {...other}>{children}</div>
)

const Enhanced = compose(
  setPropTypes({ classes: PropTypes.string }),
)(WrapLayout)

export default Enhanced