import PropTypes from 'prop-types'
import { compose, setPropTypes, mapProps } from 'recompose'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Table = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`root ${classes}` })),
)(props => <table {...props} />)

const CellContext = React.createContext('head')

const Head = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => (
  <CellContext.Provider value="head">
    <thead {...props} />
  </CellContext.Provider>
))

const Body = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => (
  <CellContext.Provider value="body">
    <tbody {...props} />
  </CellContext.Provider>
))

const Foot = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => (
  <CellContext.Provider value="foot">
    <tfoot {...props} />
  </CellContext.Provider>
))

const Row = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, ...other }) => ({ ...other, className: loadClass`${classes}` })),
)(props => <tr {...props} />)

const Cell = compose(
  setPropTypes({ classes: PropTypes.string }),
  mapProps(({ classes, align, ...other }) => ({
    ...other,
    className: loadClass`${classes}`,
    'data-align': align,
  })),
)(props => (
  <CellContext.Consumer>
    {context => {
      const Component = context === 'head' ? 'th' : 'td'
      return <Component {...props} />
    }}
  </CellContext.Consumer>
))

export { Table, Head, Body, Foot, Row, Cell }