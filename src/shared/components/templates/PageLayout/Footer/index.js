import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Footer = props => (
  <footer className={loadClass`root`}>
    <h2>FOOTER</h2>
  </footer>
)

export default Footer