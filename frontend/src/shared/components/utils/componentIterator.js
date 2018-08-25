import { Component } from 'react'
import { getDisplayName, wrapDisplayName } from 'recompose'
import uuidv4 from 'uuid/v4'

const keyGenerator = (key = uuidv4()) => key

const componentIterator = (BaseComponent, propName = 'list') => {

  class ComponentIterator extends Component {
    render() {
      const { props } = this
      const list = props[propName]
      if (!list) return null
      const copyProps = { ...props }
      delete copyProps[propName]
      return (
        <>
          {list.map(element => (
            <BaseComponent key={keyGenerator(element.key)} {...copyProps} {...element} />
          ))}
        </>
      )
    }
  }

  ComponentIterator.displayName = wrapDisplayName(getDisplayName(BaseComponent), 'componentIterator')

  return ComponentIterator
}

export default componentIterator