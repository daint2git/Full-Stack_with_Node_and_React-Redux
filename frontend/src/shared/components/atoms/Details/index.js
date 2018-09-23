import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Details = ({ classes, summary, children, ...other }) => (
  <details className={loadClass`root ${classes}`} {...other}>
    <summary>{summary}</summary>
    {children}
  </details>
)

const EnhancedComponent = compose(
  setPropTypes({
    classes: PropTypes.string,
    summary: PropTypes.string,
  }),
)(Details)

export default EnhancedComponent