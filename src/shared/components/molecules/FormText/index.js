import Text from 'shared/components/atoms/Text'
import InputError from 'shared/components/molecules/InputError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormText = ({ errorMessage, ...rest }) => (
  <div className={loadClass`root`}>
    <Text {...rest} />
    <InputError errorMessage={errorMessage} />
  </div>
)

export default FormText