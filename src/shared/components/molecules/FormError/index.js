import Span from 'shared/components/atoms/Span'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  const { errorMessage, children, ...rest } = props
  return (
    <div className={loadClass`root`} {...rest}>
      <Span color="danger">{errorMessage || children}</Span>
    </div>
  )
}