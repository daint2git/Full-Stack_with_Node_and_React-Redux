import React from 'react'

import reactDiffusioner from 'shared/components/utils/reactDiffusioner'
import Radio from 'shared/components/atoms/Radio'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const TYPES = ['primary', 'success', 'info', 'warning', 'danger', 'secondary', 'dark', 'light']
const SIZES = ['small', 'medium', 'large']

const Radios = reactDiffusioner(Radio)

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
}

export default function ControlPanel(props) {
  const {
    type,
    size,
    onChange,
  } = props
  return (
    <div className={loadClass`control`}>
      <ControlItem
        className="control-type"
        kind="type"
        list={TYPES}
        value={type}
        onChange={onChange}
      />
      <ControlItem
        className="control-size"
        kind="size"
        list={SIZES}
        value={size}
        onChange={onChange}
      />
    </div>
  )
}