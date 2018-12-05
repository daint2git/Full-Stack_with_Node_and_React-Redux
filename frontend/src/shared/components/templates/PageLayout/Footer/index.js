import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Footer = props => (
  <footer className={loadClass`root`}>
    <FontAwesomeIcon className={loadClass`icon`} icon={['fab', 'facebook-square']} />
    <FontAwesomeIcon className={loadClass`icon`} icon={['fab', 'google-plus-square']} />
    <FontAwesomeIcon className={loadClass`icon`} icon={['fab', 'twitter-square']} />
  </footer>
)

export default Footer
