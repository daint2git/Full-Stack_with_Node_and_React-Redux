import React from 'react'
import uuidv4 from 'uuid/v4'
import either from './either'

export default function(
  Component,
  propName = 'list',
) {
  return props => {
    const list = props[propName]
    if (!list) return null
    const restProps = {}
    for (let key of Object.keys(props)) {
      if (key !== propName) restProps[key] = props[key]
    }
    return (
      <>
        {list.map(elementProps => {
          const newProps = { ...elementProps, ...restProps }
          return <Component key={either(elementProps.key)(uuidv4())} {...newProps} />
        })}
      </>
    )
  }
}