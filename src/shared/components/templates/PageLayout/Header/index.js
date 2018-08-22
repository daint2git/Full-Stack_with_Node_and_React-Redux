import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Header = props => (
  <header className={loadClass`root`}>
    <h2>HEADER</h2>
  </header>
)

export default Header