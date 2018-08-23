import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const RowSeparateLine = ({ margin, ...rest }) => (
  <div className={loadClass`root`} data-margin={margin} {...rest} />
)

const Presentational = compose(
  defaultProps({ margin: 10 }),
  setPropTypes({ margin: PropTypes.number }),
)(RowSeparateLine)

export default Presentational