import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Radio = ({ classes, id, children, checked, ...other }) => (
  <div className={loadClass`root ${classes}`}>
    <label className={loadClass`input`} htmlFor={id}>
      <input type="radio" id={id} {...other} />
      <div className={loadClass`radio`}>
        <div className={loadClass`icon`} data-checked={checked} />
      </div>
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