import { compose, withStateHandlers } from 'recompose'

import Text from 'shared/components/atoms/Text'
import Button from 'shared/components/atoms/Button'
import Span from 'shared/components/atoms/Span'
import reactDiffusioner from 'shared/components/utils/reactDiffusioner'

const Phone = ({ name, price }) => (
  <div>
    <Span>{`name: ${name}`}</Span>
    <Span>{`price: ${price}`}</Span>
  </div>
)

const Phones = reactDiffusioner(Phone)

const ReactReduxTestContent = ({
  result,
  list,
  inputText,
  changeText,
  readPhones,
  onChange,
}) => (
  <div>
    <Text name="inputText" value={inputText} onChange={onChange} />
    <Button onClick={() => changeText(inputText)}>Click</Button>
    <Button onClick={readPhones}>Click</Button>
    <Span>{result}</Span>
    <Phones list={list} />
  </div>
)

export default compose(
  withStateHandlers(
    { inputText: '' },
    { onChange: state => e => ({ ...state, [e.target.name]: e.target.value }) },
  )
)(ReactReduxTestContent)