import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  const { className, ...rest } = props
  return <input type="text" className={loadClass`root ${className}`} {...rest} />
}