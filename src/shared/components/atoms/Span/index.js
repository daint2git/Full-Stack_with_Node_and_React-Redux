import PropTypes from 'prop-types'
import { compose, defaultProps, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Span = ({
  classes,
  ellipsis,
  active,
  align,
  weight,
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
    data-color={color}
    data-size={size}
    {...rest}
  />
)

const Enhanced = compose(
  defaultProps({
    align: 'left',
    weight: 'lighter',
    color: 'dark',
    size: 'medium',
  }),
  setPropTypes({
    classes: PropTypes.string,
    ellipsis: PropTypes.string,
    active: PropTypes.bool,
    align: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
  }),
)(Span)

export default Enhanced