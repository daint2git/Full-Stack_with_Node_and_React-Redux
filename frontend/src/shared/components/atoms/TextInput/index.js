import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TextInput = ({ classes, attention, multiline, type, ...other }) => {
  const props = {
    className: loadClass`root ${classes}`,
    'data-attention': attention,
    ...other
  }
  return !multiline ? <input type={type} {...props} /> : <textarea {...props} />
}

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    multiline: PropTypes.bool,
    attention: PropTypes.bool,
  }),
)(TextInput)

export default Enhanced