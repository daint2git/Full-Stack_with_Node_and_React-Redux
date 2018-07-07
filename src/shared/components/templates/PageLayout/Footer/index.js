import React from 'react'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function(props) {
  return (
    <footer className={loadClass`root`}>
      <h2>FOOTER</h2>
    </footer>
  )
}