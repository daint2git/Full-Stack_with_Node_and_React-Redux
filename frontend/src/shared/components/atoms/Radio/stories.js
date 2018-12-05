import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import Radio from './'

const EnhancedRadio = withStateHandlers(
  { name: 'example', checked: '1' },
  { onChange: state => e => ({ ...state, checked: e.target.id }) },
)(({ render, ...other }) => render(other))

storiesOf('ATOMS|Radio', module)
  .add('default', () => (
    <EnhancedRadio
      render={({ checked, ...other }) => (
        <>
          <Radio id="1" checked={'1' === checked} {...other}>
            Radio 1
          </Radio>
          <Radio id="2" checked={'2' === checked} {...other}>
            Radio 2
          </Radio>
          <Radio id="3" checked={'3' === checked} {...other}>
            Radio 3
          </Radio>
        </>
      )}
    />
  ))
  .add('disabled', () => (
    <>
      <Radio disabled checked>
        disabled - checked
      </Radio>
      <Radio disabled>disabled</Radio>
    </>
  ))
