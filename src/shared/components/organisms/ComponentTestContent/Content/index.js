import React from 'react'

import Button from 'shared/components/atoms/Button'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function(props) {
  const {
    type,
    size,
  } = props
  return (
    <div className={loadClass`content`}>
      <Button type={type} size={size}>{`${type} ${size}`}</Button>
    </div>
  )
}