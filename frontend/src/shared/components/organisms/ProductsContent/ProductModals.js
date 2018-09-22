import { compose, branch, renderNothing } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createProduct, closeModal } from 'shared/redux/reducers/products'
import { CREATE, DETAIL } from 'shared/redux/constants/modalTypes'

import CreateProductModal from './CreateProductModal'

const ProductModals = props => {
  const { modal: { type } } = props
  switch(type) {
    case CREATE:
      return <CreateProductModal {...props} />
    case DETAIL:
      return <CreateProductModal {...props} />
    default:
      return null
  }
}

const Enhanced = compose(
  connect(
    state => ({ modal: state.products.modal }),
    dispacth => bindActionCreators({ createProduct, closeModal }, dispacth),
  ),
  branch(({ modal: { type } }) => !type, renderNothing),
)(ProductModals)

export default Enhanced