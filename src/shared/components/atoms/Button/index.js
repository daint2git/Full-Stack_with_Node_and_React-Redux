import React from 'react'
import { compose, defaultProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

function Button(props) {
  const {
    className,
    type,
    size,
    ...rest
  } = props
  return (
    <button
      className={loadClass`root ${className}`}
      data-type={type}
      data-size={size}
      {...rest}
    />
  )
}

export default compose(
  defaultProps({
    type: 'primary',
    size: 'medium',
  })
)(Button)