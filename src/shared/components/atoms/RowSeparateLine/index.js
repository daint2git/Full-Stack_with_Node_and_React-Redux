import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const RowSeparateLine = props => <div className={loadClass`root`} {...props} />

export default RowSeparateLine