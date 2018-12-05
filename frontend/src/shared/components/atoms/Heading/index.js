import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Heading = ({ component: Component, ...other }) => <Component {...other} />

const EnhancedComponent = compose(
  defaultProps({ component: 'h2' }),
  setPropTypes({
    component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    classes: PropTypes.string,
    color: PropTypes.string,
  }),
  mapProps(({ component, classes, weight, value, color, ...other }) => ({
    ...other,
    className: loadClass`root ${component} ${classes}`,
    'data-color': color,
    component,
  })),
)(Heading)

export default EnhancedComponent
