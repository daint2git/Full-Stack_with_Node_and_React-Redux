import { compose, branch, renderNothing } from 'recompose'

import TextOuput from 'shared/components/atoms/TextOuput'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormError = ({ errorMessage, children, ...other }) => (
  <div className={loadClass`root`} {...other}>
    <TextOuput color="danger" align="center">{errorMessage || children}</TextOuput>
  </div>
)

const Enhanced = compose(
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(FormError)

export default Enhanced