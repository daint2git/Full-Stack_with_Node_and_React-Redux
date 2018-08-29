import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, defaultProps, setPropTypes, mapProps, branch, renderNothing } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Button = props => <button {...props} />

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
  mapProps(({
    classes,
    type,
    size,
    disabled,
    shouldPreventSubmit,
    dispatch,
    ...other
  }) => ({
    ...other,
    className: loadClass`root ${classes}`,
    'data-type': type,
    'data-size': size,
    disabled: disabled || shouldPreventSubmit,
  })),
  branch(({ hidden }) => hidden, renderNothing),
)(Button)

const EnhancedConnect = compose(
  connect(state => ({ shouldPreventSubmit: state.loading.shouldPreventSubmit })),
)(Enhanced)

export default (STORY_BOOK ? Enhanced : EnhancedConnect)