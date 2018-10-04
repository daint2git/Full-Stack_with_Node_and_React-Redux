import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'

import { openCreateModal } from 'shared/redux/reducers/products'

import Heading from 'shared/components/atoms/Heading'
import Button from 'shared/components/atoms/Button'
import Spacer from 'shared/components/atoms/Spacer'
import WrapLayout from 'shared/components/atoms/WrapLayout'
import { ProductModals, ProductTable } from 'shared/components/organisms/ProductsContent'
import PageLayout from 'shared/components/templates/PageLayout'

const ProductsPage = ({ user: { isViewer }, openCreateModal, ...other }) => (
  <PageLayout currentPath="/products">
    <Heading component="h2" weight="bold">Products page</Heading>
    <Spacer />
    <WrapLayout>
      <Button size="large" disabled={isViewer} onClick={openCreateModal}>
        Create Product
      </Button>
      <Spacer />
      <ProductModals {...other} />
      <ProductTable {...other} />
    </WrapLayout>
  </PageLayout>
)

export default compose(
  connect(
    state => ({ user: state.auth.user }),
    dispatch => bindActionCreators({ openCreateModal }, dispatch),
  ),
)(ProductsPage)