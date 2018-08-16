import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  const {
    className,
    caption,
    children,
    ...rest
  } = props
  return (
    <figure className={loadClass`root ${className}`} {...rest}>
      <figcaption>{caption}</figcaption>
      {children}
    </figure>
  )
}
