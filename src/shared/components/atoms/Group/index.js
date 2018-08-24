import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Group = ({ classes, children, ...other }) => (
  <div className={loadClass`root ${classes}`} {...other}>{children}</div>
)

const Enhanced = compose(
  setPropTypes({ classes: PropTypes.string }),
)(Group)

export default Enhanced