import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { openDetailModal } from 'shared/redux/reducers/phones'

import  { Table, Head, Body, Row, Cell } from 'shared/components/atoms/Table'
import TextValue from 'shared/components/atoms/TextValue'
import repeatComponent from 'shared/components/utils/repeatComponent'
import { showPrice } from 'shared/components/utils/common'

const Phone = ({
  id,
  name,
  describe,
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
    <Cell>
      <TextValue ellipsis>{describe}</TextValue>
    </Cell>
    <Cell align="right">{`${showPrice(price)} VND`}</Cell>
    <Cell align="right">{quantity}</Cell>
    <Cell>{category}</Cell>
    <Cell>{active}</Cell>
  </Row>
)

const Phones = repeatComponent(Phone)

const PhoneTable = props => (
  <Table>
    <Head>
      <Row>
        <Cell>name</Cell>
        <Cell>describe</Cell>
        <Cell align="right">price</Cell>
        <Cell align="right">quantity</Cell>
        <Cell>category</Cell>
        <Cell>active</Cell>
      </Row>
    </Head>
    <Body>
      <Phones {...props} />
    </Body>
  </Table>
)

const Enhanced = compose(
  connect(
    state => ({ list: state.phones.list }),
    dispacth => bindActionCreators({ openDetailModal }, dispacth),
  ),
)(PhoneTable)

export default Enhanced