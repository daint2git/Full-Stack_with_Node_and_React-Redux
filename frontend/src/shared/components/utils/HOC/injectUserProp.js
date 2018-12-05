import React from 'react'
import { connect } from 'react-redux'

import getDisplayName from './utils/getDisplayName'

const injectUserProp = Component => {
  const InjectUserProp = ({ user, ...other }) => <Component {...other} />
  InjectUserProp.displayName = `injectUserProp(${getDisplayName(Component)})`
  return connect(state => ({ user: state.auth.user }))(InjectUserProp)
}

export default injectUserProp
