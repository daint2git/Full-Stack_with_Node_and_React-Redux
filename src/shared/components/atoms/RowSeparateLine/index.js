import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const RowSeparateLine = ({ margin, ...other }) => (
  <div className={loadClass`root`} data-margin={margin} {...other} />
)

const Enhanced = compose(
  defaultProps({ margin: 10 }),
  setPropTypes({ margin: PropTypes.number }),
)(RowSeparateLine)

export default Enhanced