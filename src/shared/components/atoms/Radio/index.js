import React from 'react'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function(props) {
  const {
    className,
    id,
    children,
    ...rest
  } = props
  return (
    <div className={loadClass`root`}>
      <label className={loadClass`input`} htmlFor={id}>
        <input type="radio" id={id} {...rest} />
        <div className={loadClass`children`}>{children}</div>
      </label>
    </div>
  )
}