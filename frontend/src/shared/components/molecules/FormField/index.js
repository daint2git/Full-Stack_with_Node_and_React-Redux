import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormField = ({ children: [leftChildren, rightChildren] }) => {
  return (
    <div className={loadClass`root`}>
      <div className={loadClass`left`}>{leftChildren}</div>
      <div className={loadClass`right`}>{rightChildren}</div>
    </div>
  )
}

export default FormField