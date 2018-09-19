import { compose, withStateHandlers } from 'recompose'

import Select from 'shared/components/atoms/Select'
import Spacer from 'shared/components/atoms/Spacer'
import Button from 'shared/components/atoms/Button'
import FormField, { FieldLabel } from 'shared/components/molecules/FormField'
import FormTextInput from 'shared/components/molecules/FormTextInput'
import Modal, { Header, Body, Footer } from 'shared/components/molecules/Modal'

const OPTIONS = [
  { value: '1', children: '1'},
  { value: '2', children: '2'},
  { value: '3', children: '3'},
]

const CreatePhoneModal = ({
  name,
  describe,
  price,
  closeModal,
  onChange,
  onSubmit,
}) => (
  <Modal isOpened onClose={closeModal}>
    <Header onClose={closeModal}>New Phone</Header>
    <Body>
      <FormField>
        <FieldLabel size="large">Name</FieldLabel>
        <FormTextInput
          placeholder="Please enter username"
          value={name}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel size="large">Describe</FieldLabel>
        <FormTextInput
          placeholder="Please enter describe"
          rows={5}
          multiline
          value={describe}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Price</FieldLabel>
        <FormTextInput
          placeholder="Please enter price"
          value={price}
          onChange={onChange}
        />
      </FormField>
      <Spacer />
      <FormField>
        <FieldLabel>Quantity</FieldLabel>
        <Select options={OPTIONS} />
      </FormField>
    </Body>
    <Footer>
      <Button size="large">Submit</Button>
      <Button size="large" type="info">Reset</Button>
    </Footer>
  </Modal>
)

export default compose(
  withStateHandlers(
    ({ modal: { form } }) => ({
      name: form.name || '',
      describe: form.describe || '',
      price: form.price || '',
      quantity: form.quantity || '',
      category: form.category || '',
      active: form.active,
    }),
    {
      onChange: state => e => ({ ...state, [e.target.name]: e.target.value }),
      onSubmit: state => e => {}
    },
  ),
)(CreatePhoneModal)