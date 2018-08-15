import React from 'react'

import Button from 'shared/components/atoms/Button'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

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