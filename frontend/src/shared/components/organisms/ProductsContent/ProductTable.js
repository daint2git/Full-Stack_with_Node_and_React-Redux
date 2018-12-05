import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  readProducts,
  openDetailModal,
  openConfirmDeleteModal,
} from 'shared/redux/reducers/products'

import { Table, Head, Body, Row, Cell } from 'shared/components/atoms/Table'
import TextValue from 'shared/components/atoms/TextValue'
import { repeatComponent, asyncLoader } from 'shared/components/utils/HOC'
import { showPrice } from 'shared/components/utils/common'

const Product = ({
  id,
  name,
  price,
  quantity,
  category,
  active,
  openDetailModal,
  openConfirmDeleteModal,
}) => (
  <Row active={active} onClick={() => openDetailModal(id)}>
    <Cell>
      <TextValue ellipsis>{name}</TextValue>
    </Cell>
    <Cell align="right">{`${showPrice(price)} VND`}</Cell>
    <Cell align="right">{quantity}</Cell>
    <Cell>{category}</Cell>
    <Cell
      align="center"
      onClick={e => {
        e.stopPropagation()
        openConfirmDeleteModal(id)
      }}
    >
      <FontAwesomeIcon icon="trash" size="lg" />
    </Cell>
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
        <Cell align="center">Delete</Cell>
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
    dispacth =>
      bindActionCreators(
        {
          readProducts,
          openDetailModal,
          openConfirmDeleteModal,
        },
        dispacth,
      ),
  ),
  asyncLoader(props => props.readProducts()),
)(ProductTable)

export default Enhanced
