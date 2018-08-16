import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  return (
    <footer className={loadClass`root`}>
      <h2>FOOTER</h2>
    </footer>
  )
}