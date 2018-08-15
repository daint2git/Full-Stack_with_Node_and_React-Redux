import React from 'react'

import FileUpload from './FileUpload'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  return (
    <div className={loadClass`root`}>
      <FileUpload />
    </div>
  )
}