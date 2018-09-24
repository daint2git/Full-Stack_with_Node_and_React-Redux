import Heading from 'shared/components/atoms/Heading'
import ConfirmModal from 'shared/components/molecules/ConfirmModal'

const ConfirmDeleteProductModal = ({ modal: { args: { name } }, closeModal }) => (
  <ConfirmModal
    title="Delete product"
    onClick={() => deleteProduct(id)}
    onClose={closeModal}
  >
    <Heading component="h4">
      {`Are you sure you want to delete "${name}" ?`}
    </Heading>
  </ConfirmModal>
)

export default ConfirmDeleteProductModal