import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import ToggleButton from './'

const EnhancedToggleButton = withStateHandlers(
  { active: true },
  { onChange:  state => e => ({ ...state, active: e.target.checked })}
)(({ render, ...other }) => render(other))

storiesOf('ATOMS|ToggleButton', module)
  .add('default', () => (
    <EnhancedToggleButton
      render={({ active, onChange }) => (
        <ToggleButton active={active} onChange={onChange} />
      )}
    />
  ))
  .add('active', () => <ToggleButton active />)
  .add('inactive', () => <ToggleButton active={false} />)
  .add('active + disabled', () => <ToggleButton active disabled />)