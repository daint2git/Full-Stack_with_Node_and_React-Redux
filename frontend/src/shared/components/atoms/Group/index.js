import PropTypes from 'prop-types'
import { compose, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Group = props => <div {...props} />

const EnhancedComponent = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`root ${classes}` })),
)(Group)

export default EnhancedComponent
