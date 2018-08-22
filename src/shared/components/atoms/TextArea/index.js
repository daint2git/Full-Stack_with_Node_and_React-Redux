import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TextArea = ({ classes, ...rest }) => (
  <textarea className={loadClass`root ${classes}`} {...rest} />
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
  }),
)(TextArea)

export default Enhanced