import FileUpload from './FileUpload'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const ReactTestContent = props => (
  <div className={loadClass`root`}>
    <FileUpload />
  </div>
)

export default ReactTestContent
