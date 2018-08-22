import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Heading = ({ HSize, classes, children }) => (
  <HSize className={loadClass`root ${HSize} ${classes}`}>{children}</HSize>
)

const Enhanced = compose(
  defaultProps({ HSize: 'h2' }),
  setPropTypes({
    HSize: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
    classes: PropTypes.string,
  }),
)(Heading)

export default Enhanced