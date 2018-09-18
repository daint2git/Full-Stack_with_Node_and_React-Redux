import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const FieldLabel = ({ children, ...other }) => (
  <div className={loadClass`field-label`} {...other}>{children}</div>
)

const FormField = ({ children: [leftChildren, rightChildren], ...other }) => (
  <div className={loadClass`root`} {...other}>
    <div className={loadClass`left`}>{leftChildren}</div>
    <div className={loadClass`right`}>{rightChildren}</div>
  </div>
)

export default FormField