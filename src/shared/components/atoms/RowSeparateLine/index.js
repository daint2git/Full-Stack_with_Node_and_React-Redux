import React from 'react'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function(props) {
  return <div className={loadClass`root`} {...props} />
}