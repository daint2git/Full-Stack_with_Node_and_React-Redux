import { steps } from 'redux-effects-steps'
import { fetch } from './utils/axios'
import { createAction, createErrorAction, handleActions, handleAction } from './utils'
import { CREATE, DETAIL } from 'shared/redux/constants/modalTypes'

const readPhonesSuccess = createAction('READ_PHONES_SUCCESS')
export const readPhones = request =>
  steps(
    fetch({ method: 'get', url: 'phones', ...request }),
    [readPhonesSuccess],
  )

const createPhoneSuccess = createAction('CREATE_PHONE_SUCCESS')
export const createPhone = form =>
  steps(
    Promise.resolve(),
    createPhoneSuccess
  )

const openCreateModalSuccess = createAction('OPEN_CREATE_PHONE_MODAL_SUCCESS')
const openCreateModalFail = createErrorAction('OPEN_CREATE_PHONE_MODAL_FAIL')
export const openCreateModal = () => openCreateModalSuccess()

const openDetailModalSuccess = createAction('OPEN_DETAIL_PHONE_MODAL_SUCCESS')
const openDetailModalFail = createErrorAction('OPEN_DETAIL_PHONE_MODAL_FAIL')
export const openDetailModal = id =>
  steps(
    fetch({ method: 'get', url: `phones/${id}`}),
    [openDetailModalSuccess, openDetailModalFail]
  )

export const closeModal = createAction('CLOSE_PHONE_MODAL')

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
    handleAction(readPhonesSuccess, (state, payload) => ({ ...state, list: payload })),
    handleAction(createPhoneSuccess, (state) => ({ ...state, modal: INITIAL_STATE().modal })),
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
    handleAction(closeModal, state => ({ ...state, modal: INITIAL_STATE().modal }))
  ],
  INITIAL_STATE(),
)