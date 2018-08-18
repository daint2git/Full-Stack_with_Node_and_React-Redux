import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  const { children } = props
  return (
    <div className={loadClass`root`}>
      <div className={loadClass`form`}>{children}</div>
    </div>
  )
}