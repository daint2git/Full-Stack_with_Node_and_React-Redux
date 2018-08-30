import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import either from 'shared/components/utils/either'
import RepeatComponent from 'shared/components/utils/RepeatComponent'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const Option = props => <option {...props} />

const Options = RepeatComponent(Option, 'options')

const Select = ({ classes, attention, disabled, options, children, ...other }) => (
  <div
    className={loadClass`root ${classes}`}
    data-attention={attention}
    data-disabled={disabled}
  >
      <select disabled={disabled} {...other}>
        {either(children)(<Options options={options} />)}
      </select>
  </div>
)

const Enhanced = compose(
  setPropTypes({
    classes: PropTypes.string,
    attention: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array,
  }),
)(Select)

export default Enhanced