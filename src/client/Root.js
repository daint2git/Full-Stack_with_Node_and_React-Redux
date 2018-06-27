import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = props => {
  const { store, ...rest } = props
  return (
    <Provider store={store}>
      <Router {...rest} />
    </Provider>
  )
}

export default Root