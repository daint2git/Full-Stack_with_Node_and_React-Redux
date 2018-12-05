import WrapLayout from 'shared/components/atoms/WrapLayout'
import RowSeparateLine from 'shared/components/atoms/RowSeparateLine'

import WithStateHandlers from './WithStateHandlers'
import WithPropsOnChange from './WithPropsOnChange'
import WithReducer from './WithReducer'
import ToRenderProps from './ToRenderProps'

const RecomposeTestContent = props => (
  <WrapLayout>
    <WithStateHandlers />
    <RowSeparateLine margin={20} />
    <WithPropsOnChange />
    <RowSeparateLine margin={20} />
    <WithReducer />
    <RowSeparateLine margin={20} />
    <ToRenderProps />
  </WrapLayout>
)

export default RecomposeTestContent
