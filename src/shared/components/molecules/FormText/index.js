import Text from 'shared/components/atoms/Text'
import FormError from 'shared/components/molecules/FormError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  const { errorMessage, ...rest } = props
  return (
    <div className={loadClass`root`}>
      <Text {...rest} />
      {errorMessage ? <FormError errorMessage={errorMessage} /> : null}
    </div>
  )
}