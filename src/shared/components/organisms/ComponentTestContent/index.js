import React from 'react'
import { compose, withStateHandlers } from 'recompose'

import ControlPanel from './ControlPanel'
import Content from './Content'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

function ComponentTestContent(props) {
  return (
    <div className={loadClass`root`}>
      <ControlPanel {...props} />
      <div className={loadClass`spacer`} />
      <Content {...props} />
    </div>
  )
}

export default compose(
  withStateHandlers(
    {
      type: 'primary',
      size: 'small',
    },
    {
      onChange: state => e => ({ ...state, [e.target.name]: e.target.id }),
    },
  )
)(ComponentTestContent)