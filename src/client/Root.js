import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = props => {
  const { store, ...restProps } = props
  return (
    <Provider store={store}>
      <Router {...restProps} />
    </Provider>
  )
}

export default Root