import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = compose(
  setPropTypes({
    classes: PropTypes.string,
  }),
)(({ classes, ...rest }) => (
  <input className={loadClass`root ${classes}`} type="text" {...rest} />
))

export default Presentational