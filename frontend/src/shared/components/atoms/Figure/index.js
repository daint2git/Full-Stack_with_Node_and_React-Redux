import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Figure = ({ classes, caption, children, ...other }) => (
  <figure className={loadClass`root ${classes}`} {...other}>
    <figcaption>{caption}</figcaption>
    {children}
  </figure>
)

const EnhancedComponent = compose(
  setPropTypes({
    classes: PropTypes.string,
    caption: PropTypes.string,
  }),
)(Figure)

export default EnhancedComponent