import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Figure = ({ classes, caption, children, ...rest }) => (
  <figure className={loadClass`root ${classes}`} {...rest}>
    <figcaption>{caption}</figcaption>
    {children}
  </figure>
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    caption: PropTypes.string,
  }),
)(Figure)

export default Enhanced