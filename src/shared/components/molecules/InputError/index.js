import PropTypes from 'prop-types'
import { compose, branch, renderNothing } from 'recompose'

import TextOuput from 'shared/components/atoms/TextOuput'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const InputError = ({ errorMessage, children, ...rest }) => (
  <div className={loadClass`root`} {...rest}>
    <TextOuput color="danger">{errorMessage || children}</TextOuput>
  </div>
)

const Enhanced = compose(
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(InputError)

export default Enhanced