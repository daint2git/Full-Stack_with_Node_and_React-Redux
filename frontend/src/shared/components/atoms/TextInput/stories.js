import { storiesOf } from '@storybook/react'

import TextInput from './'

storiesOf('ATOMS|TextInput', module)
  .add('default', () => <TextInput />)
  .add('multiline={false}', () => <TextInput multiline={false} />)
  .add('multiline={true}', () => <TextInput multiline />)
  .add('attention={true}', () => <TextInput attention />)
  .add('multiline={true}, attention={true}', () => <TextInput multiline attention />)
