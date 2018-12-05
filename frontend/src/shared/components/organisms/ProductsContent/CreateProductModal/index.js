import { compose, withStateHandlers } from 'recompose'

import { CREATE } from 'shared/redux/constants/modalTypes'

import Select from 'shared/components/atoms/Select'
import Spacer from 'shared/components/atoms/Spacer'
import Button from 'shared/components/atoms/Button'
import ToggleButton from 'shared/components/atoms/ToggleButton'
import FormField, { FieldLabel } from 'shared/components/molecules/FormField'
import FormTextInput from 'shared/components/molecules/FormTextInput'
import Modal, { Header, Body, Footer } from 'shared/components/molecules/Modal'

import { QUANTITY, MANUFACTURER, CATEGORY } from './constants'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const CreateProductModal = ({
  modal: { type },
  name,
  description,
  image,
  price,
  quantity,
  manufacturer,
  category,
  active,
  closeModal,
  onChange,
  onActiveChange,
  onSubmit,
  onReset,
}) => (
  <Modal onClose={closeModal} classes={loadClass`modal`}>
    <Header onClose={closeModal}>{type === CREATE ? 'Add new product' : 'Detail product'}</Header>
    <Body>
      <FormField>
        <FieldLabel size="large">Name</FieldLabel>
        <FormTextInput
          name="name"
          placeholder="Please enter username"
          value={name}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel size="large">Description</FieldLabel>
        <FormTextInput
          name="description"
          placeholder="Please enter description"
          rows={5}
          multiline
          value={description}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Price</FieldLabel>
        <FormTextInput
          name="price"
          placeholder="Please enter price"
          align="right"
          value={price}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Quantity</FieldLabel>
        <Select
          classes={loadClass`select`}
          name="quantity"
          options={QUANTITY}
          value={quantity}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Manufacturer</FieldLabel>
        <Select
          classes={loadClass`select`}
          name="manufacturer"
          options={MANUFACTURER}
          value={manufacturer}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Category</FieldLabel>
        <Select
          classes={loadClass`select`}
          name="category"
          options={CATEGORY}
          value={category}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Active</FieldLabel>
        <ToggleButton name="active" active={active} onChange={onActiveChange} />
      </FormField>
    </Body>
    <Footer>
      <Button size="large" onClick={onSubmit} disabled={!name}>
        Submit
      </Button>
      <Button size="large" type="info" onClick={onReset}>
        Reset
      </Button>
    </Footer>
  </Modal>
)

const INITIAL_LOCAL_STATE = ({ modal: { type, form } }) => ({
  name: form.name || '',
  description: form.description || '',
  image: form.image || '',
  price: form.price || 0,
  quantity: form.quantity || 1,
  manufacturer: form.manufacturer || 'OTHER',
  category: form.category || 'PHONE',
  active: type === CREATE ? true : form.active,
})

export default compose(
  withStateHandlers(props => INITIAL_LOCAL_STATE(props), {
    onChange: state => e => ({ ...state, [e.target.name]: e.target.value }),
    onActiveChange: state => e => ({ ...state, [e.target.name]: e.target.checked }),
    onSubmit: (state, props) => e => {
      const { name, description, image, price, quantity, manufacturer, category, active } = state
      const {
        modal: {
          type,
          form: { id },
        },
        createProduct,
        updateProduct,
      } = props
      return type === CREATE
        ? createProduct({
            name,
            description,
            image,
            price,
            quantity,
            manufacturer,
            category,
            active,
          })
        : updateProduct(id, {
            name,
            description,
            image,
            price,
            quantity,
            manufacturer,
            category,
            active,
          })
    },
    onReset: (_, props) => () => INITIAL_LOCAL_STATE(props),
  }),
)(CreateProductModal)
