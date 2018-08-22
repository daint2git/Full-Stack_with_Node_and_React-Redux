import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Radio = ({ classes, id, children, ...rest }) => (
  <div className={loadClass`root ${classes}`}>
    <label className={loadClass`input`} htmlFor={id}>
      <input type="radio" id={id} {...rest} />
      <div className={loadClass`children`}>{children}</div>
    </label>
  </div>
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    id: PropTypes.string,
  }),
)(Radio)

export default Enhanced