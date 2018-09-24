import PropTypes from 'prop-types'
import { compose, setPropTypes, defaultProps } from 'recompose'

import noop from 'shared/components/utils/noop'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const ToggleButton = ({ classes, active, ...other }) => (
  <input
    type="checkbox"
    className={loadClass`root ${classes}`}
    checked={active}
    {...other}
  />
)

const EnhancedComponent = compose(
  setPropTypes({
    classes: PropTypes.string,
    active: PropTypes.bool,
  }),
  defaultProps({
    onChange: noop,
  }),
)(ToggleButton)

export default EnhancedComponent