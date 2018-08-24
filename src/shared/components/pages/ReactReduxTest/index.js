import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'

import { changeInput, readPhones } from 'shared/redux/reducers/reactReduxTest'

import Heading from 'shared/components/atoms/Heading'
import ReactReduxTestContent from 'shared/components/organisms/ReactReduxTestContent'
import PageLayout from 'shared/components/templates/PageLayout'

const ReactReduxTest = props => (
  <PageLayout currentPath="/react-redux">
    <Heading component="h2">React-redux page</Heading>
    <ReactReduxTestContent {...props} />
  </PageLayout>
)

export default compose(
  connect(
    state => ({
      result: state.reactReduxTest.result,
      list: state.reactReduxTest.list,
    }),
    dispatch => bindActionCreators({ changeInput, readPhones }, dispatch),
  ),
)(ReactReduxTest)