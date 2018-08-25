import Heading from 'shared/components/atoms/Heading'
import TextOutput from 'shared/components/atoms/TextOutput'
import { IconLogout } from 'shared/components/atoms/SVGIcon'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Header = ({ fullname, logout }) => (
  <header className={loadClass`root`}>
    <Heading>Study everything</Heading>
    <div className={loadClass`user-info`}>
      <TextOutput>{fullname}</TextOutput>
      <IconLogout width={25} height={25} onClick={logout} />
    </div>
  </header>
)

export default Header