import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TextOuput = ({
  classes,
  ellipsis,
  active,
  align,
  weight,
  transform,
  decoration,
  color,
  size,
  ...rest
}) => (
  <span
    className={loadClass`root ${classes}`}
    data-ellipsis={ellipsis}
    data-active={active}
    data-align={align}
    data-weight={weight}
    data-transform={transform}
    data-decoration={decoration}
    data-color={color}
    data-size={size}
    {...rest}
  />
)

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
    align: PropTypes.string,
    weight: PropTypes.string,
    transform: PropTypes.string,
    decoration: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
  }),
)(TextOuput)

export default Enhanced