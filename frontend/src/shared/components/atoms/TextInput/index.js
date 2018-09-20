import PropTypes from 'prop-types'
import { compose, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TextInput = ({ component: Component, ...other }) => <Component {...other} />

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    attention: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'right']),
    multiline: PropTypes.bool,
    type: PropTypes.string,
  }),
  mapProps(({
    classes,
    attention,
    align,
    multiline,
    ...other
  }) => ({
    ...other,
    className: loadClass`root ${classes}`,
    'data-attention': attention,
    'data-align': align,
    component: !multiline ? 'input' : 'textarea',
  })),
)(TextInput)

export default Enhanced