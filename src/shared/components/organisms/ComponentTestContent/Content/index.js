import Button from 'shared/components/atoms/Button'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Content = ({ type, size }) => (
  <div className={loadClass`content`}>
    <Button type={type} size={size}>{`${type} ${size}`}</Button>
  </div>
)

export default Content