import Flexbox from './Flexbox'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const CssAdvancedTestContent = props => (
  <div className={loadClass`root`}>
    <Flexbox />
  </div>
)

export default CssAdvancedTestContent