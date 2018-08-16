import { connect } from 'react-redux'
import { compose, defaultProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

function Button(props) {
  const {
    className,
    type,
    size,
    disabled,
    shouldPreventSubmit,
    ...rest
  } = props
  return (
    <button
      className={loadClass`root ${className}`}
      data-type={type}
      data-size={size}
      disabled={disabled || shouldPreventSubmit}
      {...rest}
    />
  )
}

export default compose(
  connect(
    state => ({ shouldPreventSubmit: state.loading.shouldPreventSubmit }),
    _ => ({})
  ),
  defaultProps({
    type: 'primary',
    size: 'medium',
  }),
)(Button)