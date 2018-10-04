import PropTypes from 'prop-types'
import { compose, setPropTypes, defaultProps } from 'recompose'

import noop from 'shared/components/utils/noop'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Radio = ({ classes, id, checked, disabled, children, ...other }) => (
  <div className={loadClass`root ${classes}`}>
    <label
      className={loadClass`input`}
      htmlFor={id}
      disabled={disabled}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        {...other}
      />
      <div className={loadClass`radio`}>
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

const EnhancedComponent = compose(
  setPropTypes({
    classes: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }),
  defaultProps({
    onChange: noop,
  }),
)(Radio)

export default EnhancedComponent