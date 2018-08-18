import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = compose(
  setPropTypes({
    classes: PropTypes.string,
    caption: PropTypes.string,
  }),
)(({ classes, caption, children, ...rest }) => (
  <figure className={loadClass`root ${classes}`} {...rest}>
    <figcaption>{caption}</figcaption>
    {children}
  </figure>
))

export default Presentational
