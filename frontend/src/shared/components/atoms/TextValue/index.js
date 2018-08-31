import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TextValue = props => <div {...props} />

const Enhanced = compose(
  defaultProps({
    align: 'left',
    color: 'dark',
    size: 'medium',
  }),
  setPropTypes({
    classes: PropTypes.string,
    ellipsis: PropTypes.bool,
    active: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    weight: PropTypes.oneOf(['bold', 'lighter', 'bolder']),
    transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
    decoration: PropTypes.oneOf(['overline', 'underline', 'line-through']),
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'x_large']),
  }),
  mapProps(({
    classes,
    ellipsis,
    active,
    align,
    weight,
    transform,
    decoration,
    color,
    size,
    ...other
  }) => ({
    ...other,
    className: loadClass`root ${classes}`,
    'data-ellipsis': ellipsis,
    'data-active': active,
    'data-align': align,
    'data-weight': weight,
    'data-transform': transform,
    'data-decoration': decoration,
    'data-color': color,
    'data-size': size,
  })),
)(TextValue)

export default Enhanced