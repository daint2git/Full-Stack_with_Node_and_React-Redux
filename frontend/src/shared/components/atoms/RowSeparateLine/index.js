import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const RowSeparateLine = props => <div {...props} />

const EnhancedComponent = compose(
  defaultProps({ margin: 10 }),
  setPropTypes({ margin: PropTypes.number }),
  mapProps(({ margin, ...other }) => ({
    ...other,
    className: loadClass`root`,
    'data-margin': margin,
  })),
)(RowSeparateLine)

export default EnhancedComponent