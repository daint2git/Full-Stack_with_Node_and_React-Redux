import React from 'react'
import uuidv4 from 'uuid/v4'

import Radio from 'shared/components/atoms/Radio'
import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

const TYPES = ['primary', 'success', 'info', 'warning', 'danger', 'secondary', 'dark', 'light']
const SIZES = ['small', 'medium', 'large']

function ControlItem(props) {
  const {
    className,
    list,
    kind,
    value,
    onChange,
  } = props
  return (
    <div className={loadClass`${className}`}>
      {list.map(element =>
        <Radio
          key={uuidv4()}
          name={kind}
          id={element}
          checked={element === value}
          onChange={onChange}
        >
          {element}
        </Radio>
      )}
    </div>
  )
}

export default function ControlPanel(props) {
  const {
    type,
    size,
    onChange,
  } = props
  return (
    <div className={loadClass`control`}>
      <ControlItem className="control-type" list={TYPES} kind="type" value={type} onChange={onChange} />
      <ControlItem className="control-size" list={SIZES} kind="size" value={size} onChange={onChange} />
    </div>
  )
}