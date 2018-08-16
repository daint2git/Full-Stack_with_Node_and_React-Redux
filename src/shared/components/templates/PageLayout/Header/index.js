import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  return (
    <header className={loadClass`root`}>
      <h2>HEADER</h2>
    </header>
  )
}