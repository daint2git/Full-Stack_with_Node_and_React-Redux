import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const Presentational = ({ HSize, classes, children }) => (
  <HSize className={loadClass`root ${HSize} ${classes}`}>{children}</HSize>
)

export default Presentational