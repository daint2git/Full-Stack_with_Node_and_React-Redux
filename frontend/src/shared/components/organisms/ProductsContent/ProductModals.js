import { compose, branch, renderNothing } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createProduct, updateProduct, deleteProduct, closeModal } from 'shared/redux/reducers/products'
import { CREATE, DETAIL, DELETE } from 'shared/redux/constants/modalTypes'

import CreateProductModal from './CreateProductModal'
import ConfirmDeleteProductModal from './ConfirmDeleteProductModal'

const ProductModals = props => {
  const { modal: { type } } = props
  switch(type) {
    case CREATE:
      return <CreateProductModal {...props} />
    case DETAIL:
      return <CreateProductModal {...props} />
    case DELETE:
      return <ConfirmDeleteProductModal {...props} />
    default:
      return null
  }
}

const Enhanced = compose(
  connect(
    state => ({ modal: state.products.modal }),
    dispacth => bindActionCreators({
      createProduct,
      updateProduct,
      deleteProduct,
      closeModal,
    }, dispacth),
  ),
  branch(({ modal: { type } }) => !type, renderNothing),
)(ProductModals)

export default Enhanced