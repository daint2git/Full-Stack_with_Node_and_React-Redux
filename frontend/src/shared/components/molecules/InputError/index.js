import { compose, branch, renderNothing } from 'recompose'

import TextValue from 'shared/components/atoms/TextValue'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const InputError = ({ errorMessage, children, ...other }) => (
  <div className={loadClass`root`} {...other}>
    <TextValue color="danger">{errorMessage || children}</TextValue>
  </div>
)

const EnhancedComponent = compose(
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(InputError)

export default EnhancedComponent