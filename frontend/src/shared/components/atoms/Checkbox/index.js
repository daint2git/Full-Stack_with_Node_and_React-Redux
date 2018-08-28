import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Checkbox = ({ classes, id, checked, disabled, children, ...other }) => (
  <div className={loadClass`root ${classes}`}>
    <label
      className={loadClass`input`}
      htmlFor={id}
      disabled={disabled}
    >
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        checked={checked}
        {...other}
      />
      <div className={loadClass`checkbox`}>
        <div
          className={loadClass`icon`}
          data-checked={checked}
          data-disabled={disabled}
        />
      </div>
      {children && <div className={loadClass`children`}>{children}</div>}
    </label>
  </div>
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  }),
)(Checkbox)

export default Enhanced