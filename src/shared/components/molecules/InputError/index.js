import PropTypes from 'prop-types'
import { compose, setPropTypes, branch, renderNothing } from 'recompose'

import Span from 'shared/components/atoms/Span'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = compose(
  setPropTypes({ errorMessage: PropTypes.string }),
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(({ errorMessage, children, ...rest }) => (
  <div className={loadClass`root`} {...rest}>
    <Span color="danger">{errorMessage || children}</Span>
  </div>
))

export default Presentational