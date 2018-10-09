import React from 'react'
import { storiesOf } from '@storybook/react'

import Popup from './'

storiesOf('MOLECULES|Popup', module)
  .add('default', () => <Popup>Text messages.</Popup>)
  .add('autoClose=true', () => (
    <Popup autoClose>This message will autoclosing 1000ms.</Popup>
  ))
