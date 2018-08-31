import { setDisplayName, wrapDisplayName } from 'recompose'
import uuidv4 from 'uuid/v4'
import either from './either'

const keyGenerator = key => either(key)(uuidv4())

const repeatComponent = (BaseComponent, propName = 'list') => {
  const RepeatComponent = props => {
    const list = props[propName]
    const restProps = delete { ...props }[propName]
    if (!list) return null
    return (
      <>
        {list.map(elementProps =>
          <BaseComponent key={keyGenerator(elementProps.key)} {...restProps} {...elementProps} />
        )}
      </>
    )
  }
  return setDisplayName(wrapDisplayName(BaseComponent, 'repeatComponent'))(RepeatComponent)
}

export default repeatComponent