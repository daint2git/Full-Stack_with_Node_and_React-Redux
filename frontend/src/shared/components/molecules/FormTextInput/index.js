import TextInput from 'shared/components/atoms/TextInput'
import InputError from 'shared/components/molecules/InputError'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormTextInput = ({ message, ...other }) => (
  <div className={loadClass`root`}>
    <TextInput attention={!!message} {...other} />
    <InputError message={message} />
  </div>
)

export default FormTextInput