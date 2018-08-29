import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Heading = ({ component: Component, ...other }) => <Component {...other} />

const Enhanced = compose(
  defaultProps({ component: 'h2' }),
  setPropTypes({
    component: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
    classes: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
  }),
  mapProps(({
    component,
    classes,
    weight,
    color,
    value,
    children,
    ...other
  }) => ({
    ...other,
    className: loadClass`root ${component} ${classes}`,
    'data-weight': weight,
    'data-color': color,
    children: value || children,
    component,
  })),
)(Heading)

export default Enhanced