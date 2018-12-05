import { compose, branch, renderNothing } from 'recompose'

import TextValue from 'shared/components/atoms/TextValue'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const FormError = ({ errorMessage, children, ...other }) => (
  <div className={loadClass`root`} {...other}>
    <TextValue color="danger" align="center">
      {errorMessage || children}
    </TextValue>
  </div>
)

const Enhanced = compose(
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(FormError)

export default Enhanced
