import Radio from 'shared/components/atoms/Radio'
import { repeatComponent } from 'shared/components/utils/HOC'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TYPES = ['primary', 'success', 'info', 'warning', 'danger', 'secondary', 'dark', 'light']
const SIZES = ['small', 'medium', 'large']

const Radios = repeatComponent(Radio)

const ControlItem = ({ classes, list, kind, value, onChange }) => (
  <div className={loadClass`${classes}`}>
    <Radios
      list={list.map(element => ({
          name: kind,
          id: element,
          checked: element === value,
          onChange: onChange,
          children: element,
      }))}
    />
  </div>
)

const ControlPanel = ({ type, size, ...other }) => (
  <div className={loadClass`control`}>
    <ControlItem
      classes="control-type"
      kind="type"
      list={TYPES}
      value={type}
      {...other}
    />
    <ControlItem
      classes="control-size"
      kind="size"
      list={SIZES}
      value={size}
      {...other}
    />
  </div>
)

export default ControlPanel