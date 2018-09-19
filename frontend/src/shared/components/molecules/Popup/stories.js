import React from 'react'
import { storiesOf } from '@storybook/react'

import Popup from './'

storiesOf('Popup', module)
  .add('default', () => <Popup isOpened>Text messages.</Popup>)
  .add('autoClose=true', () => (
    <Popup isOpened autoClose>This message will autoclosing 1000ms.</Popup>
  ))
