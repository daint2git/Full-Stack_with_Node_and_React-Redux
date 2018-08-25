import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Spacer = ({ padding, ...other }) => (
  <div className={loadClass`root`} data-padding={padding} {...other} />
)

const Enhanced = compose(
  defaultProps({ padding: 10 }),
  setPropTypes({ padding: PropTypes.number }),
)(Spacer)

export default Enhanced