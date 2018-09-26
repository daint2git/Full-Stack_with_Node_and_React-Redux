import { setDisplayName, wrapDisplayName } from 'recompose'
import uuidv4 from 'uuid/v4'
import either from './either'

const keyGenerator = key => either(key)(uuidv4())

const repeatComponent = (Component, propName = 'list') => {
  const RepeatComponent = props => {
    const list = props[propName]
    const restProps = { ...props }
    delete restProps[propName]
    return list && (
      <>
        {list.map(elementProps =>
          <Component key={keyGenerator(elementProps.key)} {...restProps} {...elementProps} />
        )}
      </>
    )
  }
  return setDisplayName(wrapDisplayName(Component, 'repeatComponent'))(RepeatComponent)
}

export default repeatComponent