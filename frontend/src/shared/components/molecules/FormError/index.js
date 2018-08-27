import { compose, branch, renderNothing } from 'recompose'

import TextValue from 'shared/components/atoms/TextValue'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormError = ({ message, children, ...other }) => (
  <div className={loadClass`root`} {...other}>
    <TextValue color="danger" align="center">{message || children}</TextValue>
  </div>
)

const Enhanced = compose(
  branch(({ message, children }) => !message && !children, renderNothing),
)(FormError)

export default Enhanced