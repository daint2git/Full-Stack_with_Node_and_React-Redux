import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Text = ({ classes, ...rest }) => (
  <input className={loadClass`root ${classes}`} type="text" {...rest} />
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
  }),
)(Text)

export default Enhanced