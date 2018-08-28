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
  dispatch,
  ...other
}) => (
  <button
    className={loadClass`root ${classes}`}
    data-type={type}
    data-size={size}
    disabled={disabled || shouldPreventSubmit}
    {...other}
  />
)

const Enhanced = compose(
  defaultProps({
    type: 'primary',
    size: 'medium',
  }),
  setPropTypes({
    classes: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    shouldPreventSubmit: PropTypes.bool,
    hidden: PropTypes.bool,
  }),
  branch(({ hidden }) => hidden, renderNothing),
)(Button)

const EnhancedConnect = compose(
  connect(state => ({ shouldPreventSubmit: state.loading.shouldPreventSubmit })),
)(Enhanced)

export default (STORY_BOOK ? Enhanced : EnhancedConnect)