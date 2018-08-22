import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'

import { changeText, readPhones } from 'shared/redux/reducers/reactReduxTest'

import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'
import ReactReduxTestContent from 'shared/components/organisms/ReactReduxTestContent'

const ReactReduxTest = props => (
  <PageLayout currentPath="/react-redux">
    <Heading HSize="h2">React-redux page</Heading>
    <ReactReduxTestContent {...props} />
  </PageLayout>
)

export default compose(
  connect(
    state => ({
      result: state.reactReduxTest.result,
      list: state.reactReduxTest.list,
    }),
    dispatch => bindActionCreators({ changeText, readPhones }, dispatch),
  ),
)(ReactReduxTest)