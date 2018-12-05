import React from 'react'
import uuidv4 from 'uuid/v4'

import either from '../either'
import getDisplayName from './utils/getDisplayName'

const keyGenerator = key => either(key)(uuidv4())

const repeatComponent = (Component, propName = 'list') => {
  const RepeatComponent = props => {
    const list = props[propName]
    const restProps = { ...props }
    delete restProps[propName]
    return (
      list && (
        <>
          {list.map(elementProps => (
            <Component key={keyGenerator(elementProps.key)} {...restProps} {...elementProps} />
          ))}
        </>
      )
    )
  }
  RepeatComponent.displayName = `repeatComponent(${getDisplayName(Component)})`
  return RepeatComponent
}

export default repeatComponent
