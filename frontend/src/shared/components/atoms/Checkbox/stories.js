import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import Checkbox from '../Checkbox'

const EnhancedCheckbox = withStateHandlers(
  { name: 'example' , checked: '1' },
  { onChange:  state => e => ({ ...state, checked:  e.target.id })}
)(({ render, ...other }) => render(other))

storiesOf('Checkbox', module)
.add('default', () => (
  <EnhancedCheckbox
    render={({ checked, ...other }) => (
      <>
        <Checkbox id="1" checked={'1' === checked} {...other}>Checkbox 1</Checkbox>
        <Checkbox id="2" checked={'2' === checked} {...other}>Checkbox 2</Checkbox>
        <Checkbox id="3" checked={'3' === checked} {...other}>Checkbox 3</Checkbox>
      </>
    )}
  />
))
.add('disabled', () => (
  <>
    <Checkbox disabled checked>disabled - checked</Checkbox>
    <Checkbox disabled>disabled</Checkbox>
  </>
))