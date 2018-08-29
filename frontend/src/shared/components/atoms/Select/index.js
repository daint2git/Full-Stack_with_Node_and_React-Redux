import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'

import either from 'shared/components/utils/either'
import componentIterator from 'shared/components/utils/componentIterator'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export const Option = props => <option {...props} />

const Options = componentIterator(Option, 'options')

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