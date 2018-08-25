import { compose, withStateHandlers } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Spacer from 'shared/components/atoms/Spacer'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

import ControlPanel from './ControlPanel'
import Content from './Content'

const loadClass = cssModuleNameTag(styles)

const ComponentTestContent = props => (
  <WrapLayout classes={loadClass`root`}>
    <ControlPanel {...props} />
    <Spacer />
    <Content {...props} />
  </WrapLayout>
)

export default compose(
  withStateHandlers(
    { type: 'primary', size: 'small' },
    { onChange: state => e => ({ ...state, [e.target.name]: e.target.id })},
  )
)(ComponentTestContent)