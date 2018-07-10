import React from 'react'
import uuidv4 from 'uuid/v4'
import fileExtension from 'file-extension'
import { compose, withStateHandlers } from 'recompose'

import DocIcon from './svg-icons/doc_icon.svg'
import ZipIcon from './svg-icons/zip_icon.svg'
import Button from 'shared/components/atoms/Button'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

function FileTypeIcon(props) {
  const { fileName } = props
  switch(fileExtension(fileName)) {
    case 'doc': return <DocIcon />
    case 'zip': return <ZipIcon />
    default: return null
  }
}

function FileName(props) {
  const { file } = props
  return (
    <div className={loadClass`view`}>
      {file && file.name ? file.name : 'Không có tệp nào được chọn.'}
      <FileTypeIcon fileName={file && file.name ? file.name : ''} />
    </div>
  )
}

function FileUpload(props) {
  const {
    file,
    fileId,
    onChangeFile,
  } = props
  return (
    <div className={loadClass`root`}>
      <Button onClick={() => document.getElementById(fileId).click()}>Upload</Button>
      <input type="file" id={fileId} onChange={onChangeFile} />
      <FileName file={file} />
    </div>
  )
}

export default compose(
  withStateHandlers(
    {
      file: null,
      fileId: `file-${uuidv4()}`,
    },
    {
      onChangeFile: state => e => ({ ...state, file: e.target.files[0] }),
    }
  )
)(FileUpload)