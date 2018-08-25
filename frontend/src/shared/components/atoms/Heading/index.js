import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Heading = ({
  component: Component,
  classes,
  weight,
  color,
  value,
  children,
  ...other
}) => (
  <Component
    className={loadClass`root ${Component} ${classes}`}
    data-weight={weight}
    data-color={color}
    {...other}
  >
    {value || children}
  </Component>
)

const Enhanced = compose(
  defaultProps({ component: 'h2' }),
  setPropTypes({
    component: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
    classes: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
  }),
)(Heading)

export default Enhanced