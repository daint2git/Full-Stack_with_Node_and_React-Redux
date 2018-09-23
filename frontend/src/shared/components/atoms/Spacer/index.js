import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Spacer = props => <div {...props} />

const EnhancedComponent = compose(
  defaultProps({ padding: 10 }),
  setPropTypes({ padding: PropTypes.number }),
  mapProps(({ padding, ...other }) => ({
    ...other,
    className: loadClass`root`,
    'data-padding': padding,
  })),
)(Spacer)

export default EnhancedComponent