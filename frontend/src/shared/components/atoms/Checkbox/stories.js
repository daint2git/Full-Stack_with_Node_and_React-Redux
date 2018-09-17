import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import Checkbox from '../Checkbox'

const EnhancedCheckbox = withStateHandlers(
  { name: 'example' , checked: ['1'] },
  { onChange:  ({ checked, ...other }) => e => {
    if (!checked.includes(e.target.id))
      return { ...other, checked: [...checked, e.target.id]}
    return { ...other, checked: checked.filter(element => element !== e.target.id) }
  }}
)(({ render, ...other }) => render(other))

storiesOf('Checkbox', module)
.add('default', () => (
  <EnhancedCheckbox
    render={({ checked, ...other }) => (
      <>
        <Checkbox id="1" checked={checked.includes('1')} {...other}>Checkbox 1</Checkbox>
        <Checkbox id="2" checked={checked.includes('2')} {...other}>Checkbox 2</Checkbox>
        <Checkbox id="3" checked={checked.includes('3')} {...other}>Checkbox 3</Checkbox>
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