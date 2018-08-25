import { compose, branch, renderNothing } from 'recompose'

import TextOutput from 'shared/components/atoms/TextOutput'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormError = ({ errorMessage, children, ...other }) => (
  <div className={loadClass`root`} {...other}>
    <TextOutput color="danger" align="center">{errorMessage || children}</TextOutput>
  </div>
)

const Enhanced = compose(
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(FormError)

export default Enhanced