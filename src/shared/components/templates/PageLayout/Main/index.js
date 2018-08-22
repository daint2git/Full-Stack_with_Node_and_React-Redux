import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Main = ({ children }) => (
  <main className={loadClass`root`}>
    <section className={loadClass`content`}>{children}</section>
  </main>
)

export default Main