import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = compose(
  defaultProps({ padding: 10 }),
  setPropTypes({ padding: PropTypes.number }),
)(({ padding, ...rest }) => (
  <div className={loadClass`root`} data-padding={padding} {...rest} />
))

export default Presentational