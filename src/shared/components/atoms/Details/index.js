import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  const {
    className,
    summary,
    children,
    ...rest
  } = props
  return (
    <details className={loadClass`root ${className}`} {...rest}>
      <summary>{summary}</summary>
      {children}
    </details>
  )
}
