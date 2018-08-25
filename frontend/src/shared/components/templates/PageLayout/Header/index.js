import Heading from 'shared/components/atoms/Heading'
import TextValue from 'shared/components/atoms/TextValue'
import { IconLogout } from 'shared/components/atoms/Icons'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Header = ({ fullname, logout }) => (
  <header className={loadClass`root`}>
    <Heading
      component="h1"
      color="white"
      weight="bold"
      value="Study everything"
    />
    <div className={loadClass`user-info`}>
      <TextValue>{fullname}</TextValue>
      <IconLogout width={30} height={30} onClick={logout} />
    </div>
  </header>
)

export default Header