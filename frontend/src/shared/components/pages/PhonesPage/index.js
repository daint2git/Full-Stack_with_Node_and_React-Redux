import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle } from 'recompose'

import { readPhones, openCreateModal } from 'shared/redux/reducers/phones'

import Heading from 'shared/components/atoms/Heading'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import WrapLayout from 'shared/components/atoms/WrapLayout'
import { PhoneModals, PhoneTable } from 'shared/components/organisms/PhonesContent'
import PageLayout from 'shared/components/templates/PageLayout'

const PhonesPage = ({ openCreateModal, ...other }) => (
  <PageLayout currentPath="/phones">
    <Heading component="h2" weight="bold">Phones page</Heading>
    <Spacer />
    <WrapLayout>
      <Button size="large" onClick={openCreateModal}>
        Create Phone
      </Button>
      <Spacer />
      <PhoneModals {...other} />
      <PhoneTable {...other} />
    </WrapLayout>
  </PageLayout>
)

export default compose(
  connect(
    state => ({ user: state.auth.user }),
    dispatch => bindActionCreators({ readPhones, openCreateModal }, dispatch),
  ),
  lifecycle({
    componentDidMount() {
      this.props.readPhones()
    }
  })
)(PhonesPage)