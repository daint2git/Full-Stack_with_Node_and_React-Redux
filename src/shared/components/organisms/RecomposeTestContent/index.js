import Spacer from 'shared/components/atoms/Spacer'
import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

import WithStateHandlers from './WithStateHandlers'
import WithPropsOnChange from './WithPropsOnChange'
import WithReducer from './WithReducer'
import ToRenderProps from './ToRenderProps'

const loadClass = cssModuleNameTag(styles)

const SpacerRow = props => (
  <>
    <Spacer />
    <RowSeparateLine />
    <Spacer />
  </>
)

const RecomposeTestContent = props => (
  <div className={loadClass`root`}>
    <WithStateHandlers />
    <SpacerRow />
    <WithPropsOnChange />
    <SpacerRow />
    <WithReducer />
    <SpacerRow />
    <ToRenderProps />
  </div>
)

export default RecomposeTestContent