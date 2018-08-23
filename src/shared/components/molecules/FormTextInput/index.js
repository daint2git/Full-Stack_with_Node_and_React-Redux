import TextInput from 'shared/components/atoms/TextInput'
import InputError from 'shared/components/molecules/InputError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormTextInput = ({ errorMessage, ...rest }) => (
  <div className={loadClass`root`}>
    <TextInput attention={!!errorMessage} {...rest} />
    <InputError errorMessage={errorMessage} />
  </div>
)

export default FormTextInput