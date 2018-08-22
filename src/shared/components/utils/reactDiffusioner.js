import { Component } from 'react'
import { getDisplayName } from 'recompose'
import uuidv4 from 'uuid/v4'
import either from './either'

const reactDiffusioner = (BaseComponent, propName = 'list') => {
  class ReactDiffusioner extends Component {
    render() {
      const { props } = this
      const list = props[propName]
      if (!list) return null
      const restProps = { ...props }
      delete restProps[propName]
      return (
        <>
          {list.map(elementProps => {
            const newProps = { ...elementProps, ...restProps }
            return <BaseComponent key={either(elementProps.key)(uuidv4())} {...newProps} />
          })}
        </>
      )
    }
  }

  ReactDiffusioner.displayName = `${getDisplayName(BaseComponent)}s`

  return ReactDiffusioner
}

export default reactDiffusioner