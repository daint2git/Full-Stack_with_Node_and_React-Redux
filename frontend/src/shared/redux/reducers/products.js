import { steps } from 'redux-effects-steps'
import { fetch } from './utils/axios'
import { createAction, createErrorAction, handleActions, handleAction } from './utils'
import { CREATE, DETAIL, DELETE } from 'shared/redux/constants/modalTypes'

const readProductsSuccess = createAction('READ_PRODUCTS_SUCCESS')
export const readProducts = request =>
  steps(fetch({ method: 'get', url: 'products', ...request }), [readProductsSuccess])

const formData = form => {
  const body = new FormData()
  body.append('name', form.name)
  body.append('description', form.description)
  body.append('image', form.image)
  body.append('price', form.price)
  body.append('quantity', form.quantity)
  body.append('manufacturer', form.manufacturer)
  body.append('category', form.category)
  body.append('active', form.active)
  return body
}

const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS')
const createProductFail = createErrorAction('CREATE_PRODUCT_FAIL')
export const createProduct = form =>
  steps(fetch({ method: 'post', url: 'products', data: formData(form) }), [
    createProductSuccess,
    createProductFail,
  ])

const updateProductSuccess = createAction('UPDATE_PRODUCT_SUCCESS')
const updateProductFail = createErrorAction('UPDATE_PRODUCT_FAIL')
export const updateProduct = (id, form) =>
  steps(fetch({ method: 'patch', url: `products/${id}`, data: formData(form) }), [
    updateProductSuccess,
    updateProductFail,
  ])

export const deleteProduct = id => {}

const openCreateModalSuccess = createAction('OPEN_CREATE_PRODUCT_MODAL_SUCCESS')
const openCreateModalFail = createErrorAction('OPEN_CREATE_PRODUCT_MODAL_FAIL')
export const openCreateModal = () => openCreateModalSuccess()

const openDetailModalSuccess = createAction('OPEN_DETAIL_PRODUCT_MODAL_SUCCESS')
const openDetailModalFail = createErrorAction('OPEN_DETAIL_PRODUCT_MODAL_FAIL')
export const openDetailModal = id =>
  steps(fetch({ method: 'get', url: `products/${id}` }), [
    openDetailModalSuccess,
    openDetailModalFail,
  ])

const openConfirmDeleteModalSuccess = createAction('OPEN_CONFIRM_DELETE_PRODUCT_MODAL_SUCCESS')
const openConfirmDeleteModalFail = createAction('OPEN_CONFIRM_DELETE_PRODUCT_MODAL_FAIL')
export const openConfirmDeleteModal = id =>
  steps(fetch({ method: 'get', url: `products/beforeDelete/${id}` }), [
    openConfirmDeleteModalSuccess,
    openConfirmDeleteModalFail,
  ])

export const closeModal = createAction('CLOSE_PRODUCT_MODAL')

export const INITIAL_STATE = () => ({
  list: [],
  modal: {
    type: '',
    args: {},
    form: {},
  },
})

const handleSuccess = (state, payload) => ({
  ...state,
  modal: INITIAL_STATE().modal,
  list: payload,
})

export default handleActions(
  [
    handleAction(readProductsSuccess, handleSuccess),
    handleAction(createProductSuccess, handleSuccess),
    handleAction(updateProductSuccess, handleSuccess),
    handleAction(openCreateModalSuccess, state => ({
      ...state,
      modal: {
        type: CREATE,
        form: {},
      },
    })),
    handleAction(openDetailModalSuccess, (state, payload) => ({
      ...state,
      modal: {
        type: DETAIL,
        form: payload,
      },
    })),
    handleAction(openConfirmDeleteModalSuccess, (state, payload) => ({
      ...state,
      modal: {
        type: DELETE,
        args: payload,
      },
    })),
    handleAction(closeModal, state => ({
      ...state,
      modal: INITIAL_STATE().modal,
    })),
  ],
  INITIAL_STATE(),
)
