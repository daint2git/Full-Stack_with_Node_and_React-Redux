import React from 'react'
import uuidv4 from 'uuid/v4'

export default function(
  Component,
  propName = 'list'
) {
  return props => {
    const list = props[propName]
    if (!list) return null
    const rest = {}
    Object.keys(props).forEach(key => key !== propName ? rest[key] = props[key] : '')
    return (
      <>
        {list.map(elementProps => {
          const newProps = { ...elementProps, ...rest }
          return <Component key={uuidv4()} {...newProps} />
        })}
      </>
    )
  }
}