import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const LoginLayout = ({ children }) => (
  <div className={loadClass`root`}>
    <div className={loadClass`form`}>{children}</div>
  </div>
)

export default LoginLayout