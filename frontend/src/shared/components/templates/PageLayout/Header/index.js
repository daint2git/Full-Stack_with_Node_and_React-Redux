import Heading from 'shared/components/atoms/Heading'
import TextValue from 'shared/components/atoms/TextValue'
import { IconLogout } from 'shared/components/atoms/Icons'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Header = ({ fullName, logout }) => (
  <header className={loadClass`root`}>
    <Heading component="h1" color="white">
      Study everything
    </Heading>
    <div className={loadClass`user-info`}>
      <TextValue>{fullName}</TextValue>
      <IconLogout width={30} height={30} onClick={logout} />
    </div>
  </header>
)

export default Header
