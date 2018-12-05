import uuidv4 from 'uuid/v4'
import { compose, withStateHandlers } from 'recompose'

import Button from 'shared/components/atoms/Button'
import FileIcon from 'shared/components/molecules/FileIcon'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

function FileName(props) {
  return <span className={loadClass`name`}>{props.fileName}</span>
}

function FileView(props) {
  const { file } = props
  return (
    <div className={loadClass`view`}>
      {file && file.name ? (
        <>
          <FileIcon fileName={file.name} />
          <FileName fileName={file.name} />
        </>
      ) : (
        <FileName fileName="Không có tệp nào được chọn." />
      )}
    </div>
  )
}

function FileUpload(props) {
  const { file, fileId, onChangeFile } = props
  return (
    <div className={loadClass`root`}>
      <Button onClick={() => document.getElementById(fileId).click()}>Upload</Button>
      <input type="file" id={fileId} onChange={onChangeFile} />
      <FileView file={file} />
    </div>
  )
}

export default compose(
  withStateHandlers(
    {
      file: {},
      fileId: `file-${uuidv4()}`,
    },
    {
      onChangeFile: state => e => ({ ...state, file: e.target.files[0] }),
    },
  ),
)(FileUpload)
