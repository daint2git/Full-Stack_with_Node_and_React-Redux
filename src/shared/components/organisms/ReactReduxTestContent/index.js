import { compose, withStateHandlers } from 'recompose'

import TextInput from 'shared/components/atoms/TextInput'
import Button from 'shared/components/atoms/Button'
import TextOuput from 'shared/components/atoms/TextOuput'
import reactDiffusioner from 'shared/components/utils/reactDiffusioner'

const Phone = ({ name, price }) => (
  <div>
    <TextOuput>{`name: ${name}`}</TextOuput>
    <TextOuput>{`price: ${price}`}</TextOuput>
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
    <TextInput name="inputText" value={inputText} onChange={onChange} />
    <Button onClick={() => changeText(inputText)}>Click</Button>
    <Button onClick={readPhones}>Click</Button>
    <TextOuput>{result}</TextOuput>
    <Phones list={list} />
  </div>
)

export default compose(
  withStateHandlers(
    { inputText: '' },
    { onChange: state => e => ({ ...state, [e.target.name]: e.target.value }) },
  )
)(ReactReduxTestContent)