import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Main = ({ children }) => (
  <main className={loadClass`root`}>
    <div className={loadClass`content`}>{children}</div>
  </main>
)

export default Main
