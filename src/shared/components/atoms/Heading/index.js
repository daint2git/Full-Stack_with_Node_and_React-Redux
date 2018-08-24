import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Heading = ({ component: Component, classes, children, ...other }) => (
  <Component className={loadClass`root ${Component} ${classes}`} {...other}>{children}</Component>
)

const Enhanced = compose(
  defaultProps({ component: 'h2' }),
  setPropTypes({
    component: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
    classes: PropTypes.string,
  }),
)(Heading)

export default Enhanced