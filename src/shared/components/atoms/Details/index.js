import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Details = ({ classes, summary, children, ...rest }) => (
  <details className={loadClass`root ${classes}`} {...rest}>
    <summary>{summary}</summary>
    {children}
  </details>
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    summary: PropTypes.string,
  }),
)(Details)

export default Enhanced