import React from 'react'

import FileUpload from './FileUpload'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function(props) {
  return (
    <div className={loadClass`root`}>
      <FileUpload />
    </div>
  )
}