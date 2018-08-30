import { Component } from 'react'
import { getDisplayName, wrapDisplayName } from 'recompose'
import uuidv4 from 'uuid/v4'

const ComponentIterator = (
  BaseComponent,
  propName = 'list',
  keyGenerator = (key = uuidv4()) => key,
) => {
  return class WrappedComponent extends Component {
    static displayName = wrapDisplayName(getDisplayName(BaseComponent), 'ComponentIterator')
    render() {
      const { props } = this
      const list = props[propName]
      if (!list) return null
      const ownerProps = { ...props }
      delete ownerProps[propName]
      return (
        <>
          {list.map(elementProps =>
            <BaseComponent key={keyGenerator(elementProps.key)} {...ownerProps} {...elementProps} />
          )}
        </>
      )
    }
  }
}

export default ComponentIterator