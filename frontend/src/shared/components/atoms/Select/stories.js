import { storiesOf } from '@storybook/react'
import { withStateHandlers } from 'recompose'

import Select, { Option } from './'

const OPTIONS = [
  { value: '1', children: 'qwe'},
  { value: '2', children: 'asd'},
  { value: '3', children: 'zxc'},
]

const EnhancedSelect = withStateHandlers(
  { name: 'example' , value: 'qwe' },
  { onChange:  state => e => ({ ...state, value:  e.target.value })}
)(({ render, ...other }) => render(other))

storiesOf('ATOMS|Select', module)
  .add('default', () => (
    <EnhancedSelect
      render={props => (
        <Select {...props}>
          <Option value="qwe">qwe</Option>
          <Option value="asd">asd</Option>
          <Option value="zxc">zxc</Option>
        </Select>
      )}
    />
  ))
  .add('multiple', () => (
    <EnhancedSelect render={props => <Select multiple options={OPTIONS} value={['2', '3']} />} />
  ))
  .add('with options', () => (
    <EnhancedSelect render={props => <Select options={OPTIONS} {...props} />} />
  ))
  .add('attention=true', () => (
    <EnhancedSelect render={props => <Select options={OPTIONS} attention {...props} />} />
  ))
  .add('disabled=true', () => (
    <EnhancedSelect render={props => <Select options={OPTIONS} disabled {...props} />} />
  ))