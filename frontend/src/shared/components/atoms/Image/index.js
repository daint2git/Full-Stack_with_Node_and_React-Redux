import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Image = props => <img {...props} />

const EnhancedComponent = compose(
  defaultProps({ margin: 10 }),
  setPropTypes({ margin: PropTypes.number }),
  mapProps(({ margin, ...other }) => ({
    ...other,
    className: loadClass`root`,
  })),
)(Image)

export default EnhancedComponent
