import { storiesOf } from '@storybook/react'

import TextValue from 'shared/components/atoms/TextValue'
import TextInput from 'shared/components/atoms/TextInput'
import FormField from './'

storiesOf('FormField', module)
  .add('default', () => (
    <FormField>
      <TextValue>username</TextValue>
      <TextInput placeholder="Please enter username" />
    </FormField>
  ))