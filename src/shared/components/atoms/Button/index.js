import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, defaultProps, setPropTypes, branch, renderNothing } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Button = ({
  classes,
  type,
  size,
  disabled,
  shouldPreventSubmit,
  ...rest
}) => (
  <button
    className={loadClass`root ${classes}`}
    data-type={type}
    data-size={size}
    disabled={disabled || shouldPreventSubmit}
    {...rest}
  />
)

const Enhanced = compose(
  defaultProps({
    type: 'primary',
    size: 'medium',
  }),
  setPropTypes({
    classes: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
  }),
  branch(({ hidden }) => hidden, renderNothing),
)(Button)

const EnhancedConnect = compose(
  connect(
    state => ({ shouldPreventSubmit: state.loading.shouldPreventSubmit }),
    _ => ({}),
  ),
)(Enhanced)

export default (STORY_BOOK ? Enhanced : EnhancedConnect)