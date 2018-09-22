import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { openDetailModal } from 'shared/redux/reducers/products'

import  { Table, Head, Body, Row, Cell } from 'shared/components/atoms/Table'
import TextValue from 'shared/components/atoms/TextValue'
import repeatComponent from 'shared/components/utils/repeatComponent'
import { showPrice } from 'shared/components/utils/common'

const Product = ({
  id,
  name,
  price,
  quantity,
  category,
  active,
  openDetailModal,
}) => (
  <Row onClick={() => openDetailModal(id)}>
    <Cell>
      <TextValue ellipsis>{name}</TextValue>
    </Cell>
    <Cell align="right">{`${showPrice(price)} VND`}</Cell>
    <Cell align="right">{quantity}</Cell>
    <Cell>{category}</Cell>
    <Cell>{active}</Cell>
  </Row>
)

const Products = repeatComponent(Product)

const ProductTable = props => (
  <Table>
    <Head>
      <Row>
        <Cell>Name</Cell>
        <Cell align="right">Price</Cell>
        <Cell align="right">Quantity</Cell>
        <Cell>Category</Cell>
        <Cell>Active</Cell>
      </Row>
    </Head>
    <Body>
      <Products {...props} />
    </Body>
  </Table>
)

const Enhanced = compose(
  connect(
    state => ({ list: state.products.list }),
    dispacth => bindActionCreators({ openDetailModal }, dispacth),
  ),
)(ProductTable)

export default Enhanced