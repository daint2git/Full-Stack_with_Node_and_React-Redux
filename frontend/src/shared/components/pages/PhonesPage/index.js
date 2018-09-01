import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle } from 'recompose'

import { readPhones, createPhone } from 'shared/redux/reducers/phones'

import Heading from 'shared/components/atoms/Heading'
import PhonesContent from 'shared/components/organisms/PhonesContent'
import PageLayout from 'shared/components/templates/PageLayout'

const PhonesPage = props => (
  <PageLayout currentPath="/phones">
    <Heading component="h2" weight="bold">Phones page</Heading>
    <PhonesContent {...props} />
  </PageLayout>
)

export default compose(
  connect(
    state => ({
      list: state.phones.list,
    }),
    dispatch => bindActionCreators({ readPhones, createPhone }, dispatch),
  ),
  lifecycle({
    componentDidMount() {
      this.props.readPhones()
    }
  })
)(PhonesPage)