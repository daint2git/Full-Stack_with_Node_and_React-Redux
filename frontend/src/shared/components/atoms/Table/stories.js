import { storiesOf } from '@storybook/react'

import  { Table, TableHead, TableBody, TableRow, TableCell } from './'

storiesOf('Table', module)
  .add('default', () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>head 1</TableCell>
          <TableCell>head 2</TableCell>
          <TableCell align="right">head 3</TableCell>
          <TableCell>head 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>data 1</TableCell>
          <TableCell>data 2</TableCell>
          <TableCell align="right">data 3</TableCell>
          <TableCell>data 4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>data 1</TableCell>
          <TableCell>data 2</TableCell>
          <TableCell align="right">data 3</TableCell>
          <TableCell>data 4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>data 1</TableCell>
          <TableCell>data 2</TableCell>
          <TableCell align="right">data 3</TableCell>
          <TableCell>data 4</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))