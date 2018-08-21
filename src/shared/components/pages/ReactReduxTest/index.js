import { compose, withStateHandlers } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeText, readPhones } from 'shared/redux/reducers/reactReduxTest'

import PageLayout from 'shared/components/templates/PageLayout'
import Button from 'shared/components/atoms/Button'
import Text from 'shared/components/atoms/Text'

export default compose(
  connect(
    state => ({
      result: state.reactReduxTest.result,
      list: state.reactReduxTest.list,
    }),
    dispatch => bindActionCreators({ changeText, readPhones }, dispatch)
  ),
  withStateHandlers(
    { inputText: '' },
    { onChange: state => e => ({ ...state, [e.target.name]: e.target.value }) }
  )
)(({ result, list, inputText, changeText, readPhones, onChange }) => {
  return (
    <PageLayout currentPath="/react-redux">
      <div>React-redux page</div>
      <Text name="inputText" value={inputText} onChange={onChange} />
      <Button onClick={() => changeText(inputText)}>Click</Button>
      <Button onClick={readPhones}>Click</Button>
      <div>{result}</div>
    </PageLayout>
  )
})
