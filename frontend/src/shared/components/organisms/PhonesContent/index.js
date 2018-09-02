import  { Table, TableHead, TableBody, TableRow, TableCell } from 'shared/components/atoms/Table'
import WrapLayout from 'shared/components/atoms/WrapLayout'
import Button from 'shared/components/atoms/Button'
import TextValue from 'shared/components/atoms/TextValue'
import repeatComponent from 'shared/components/utils/repeatComponent'

const PhoneTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>name</TableCell>
      <TableCell>describe</TableCell>
      <TableCell align="right">price</TableCell>
      <TableCell align="right">quantity</TableCell>
      <TableCell>category</TableCell>
      <TableCell>active</TableCell>
    </TableRow>
  </TableHead>
)

const Phone = ({ name, describe, price, quantity, category, active }) => (
  <TableRow>
    <TableCell>
      <TextValue ellipsis>{name}</TextValue>
    </TableCell>
    <TableCell>
      <TextValue ellipsis>{describe}</TextValue>
    </TableCell>
    <TableCell align="right">{price}</TableCell>
    <TableCell align="right">{quantity}</TableCell>
    <TableCell>{category}</TableCell>
    <TableCell>{active}</TableCell>
  </TableRow>
)

const Phones = repeatComponent(Phone)

const PhonesTable = props => (
  <Table>
    <PhoneTableHeader />
    <TableBody>
      <Phones {...props} />
    </TableBody>
  </Table>
)

const PhonesContent = ({ createPhone, ...other }) => (
  <WrapLayout>
    <Button
      size="large"
      onClick={createPhone}
    >
      Create Phone
    </Button>
    <PhonesTable {...other}/>
  </WrapLayout>
)

export default PhonesContent