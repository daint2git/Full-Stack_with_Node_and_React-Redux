import { compose, branch, renderNothing } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createPhone, closeModal } from 'shared/redux/reducers/phones'
import { CREATE, DETAIL } from 'shared/redux/constants/modalTypes'

import CreatePhoneModal from './CreatePhoneModal'

const PhoneModals = props => {
  const { modal: { type } } = props
  switch(type) {
    case CREATE:
      return <CreatePhoneModal {...props} />
    case DETAIL:
      return <CreatePhoneModal {...props} />
    default:
      return null
  }
}

const Enhanced = compose(
  connect(
    state => ({ modal: state.phones.modal }),
    dispacth => bindActionCreators({ createPhone, closeModal }, dispacth),
  ),
  branch(({ modal: { type } }) => !type, renderNothing),
)(PhoneModals)

export default Enhanced