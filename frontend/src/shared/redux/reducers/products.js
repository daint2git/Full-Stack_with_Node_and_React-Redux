import { steps } from 'redux-effects-steps'
import { fetch } from './utils/axios'
import { createAction, createErrorAction, handleActions, handleAction } from './utils'
import { CREATE, DETAIL } from 'shared/redux/constants/modalTypes'

const readProductsSuccess = createAction('READ_PRODUCTS_SUCCESS')
export const readProducts = request =>
  steps(
    fetch({ method: 'get', url: 'products', ...request }),
    [readProductsSuccess],
  )

const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS')
const createProductFail = createErrorAction('CREATE_PRODUCT_FAIL')
export const createProduct = form => {
  const body = new FormData()
  body.append('name', form.name)
  body.append('description', form.description)
  body.append('image', form.image)
  body.append('price', form.price)
  body.append('quantity', form.quantity)
  body.append('manufacturer', form.manufacturer)
  body.append('category', form.category)
  body.append('active', form.active)

  return steps(
    fetch({ method: 'post', url: 'products', data: body }),
    [createProductSuccess, createProductFail],
    () => readProducts(),
  )
}

const openCreateModalSuccess = createAction('OPEN_CREATE_PRODUCT_MODAL_SUCCESS')
const openCreateModalFail = createErrorAction('OPEN_CREATE_PRODUCT_MODAL_FAIL')
export const openCreateModal = () => openCreateModalSuccess()

const openDetailModalSuccess = createAction('OPEN_DETAIL_PRODUCT_MODAL_SUCCESS')
const openDetailModalFail = createErrorAction('OPEN_DETAIL_PRODUCT_MODAL_FAIL')
export const openDetailModal = id =>
  steps(
    fetch({ method: 'get', url: `products/${id}`}),
    [openDetailModalSuccess, openDetailModalFail]
  )

export const closeModal = createAction('CLOSE_PRODUCT_MODAL')

export const INITIAL_STATE = () => ({
  list: [],
  modal: {
    type: '',
    args: {},
    form: {},
  },
})

export default handleActions(
  [
    handleAction(readProductsSuccess, (state, payload) => ({ ...state, list: payload })),
    handleAction(createProductSuccess, (state) => ({
      ...state,
      modal: INITIAL_STATE().modal,
    })),
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
    handleAction(closeModal, state => ({
      ...state,
      modal: INITIAL_STATE().modal,
    })),
  ],
  INITIAL_STATE(),
)