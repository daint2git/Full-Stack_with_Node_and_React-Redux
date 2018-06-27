import React from 'react'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function Button(props) {
  const { className, size, ...rest } = props
  return (
    <button
      className={loadClass(`root ${className}`)}
      data-size={size}
      {...rest}
    />
  )
}