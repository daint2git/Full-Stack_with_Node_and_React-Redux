import PropTypes from 'prop-types'
import { compose, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Table = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`root ${classes}` })),
)(props => <table {...props} />)

const TableCellContext = React.createContext('head')

const TableHead = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => (
  <TableCellContext.Provider value="head">
    <thead {...props} />
  </TableCellContext.Provider>
))

const TableBody = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => (
  <TableCellContext.Provider value="body">
    <tbody {...props} />
  </TableCellContext.Provider>
))

const TableFoot = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => (
  <TableCellContext.Provider value="foot">
    <tfoot {...props} />
  </TableCellContext.Provider>
))

const TableRow = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => <tr {...props} />)

const TableCell = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, align, ...other }) => ({
    ...other,
    className: loadClass`${classes}`,
    'data-align': align,
  })),
)(props => (
  <TableCellContext.Consumer>
    {context => {
      const Component = context === 'head' ? 'th' : 'td'
      return <Component {...props} />
    }}
  </TableCellContext.Consumer>
))

export { Table, TableHead, TableBody, TableFoot, TableRow, TableCell }