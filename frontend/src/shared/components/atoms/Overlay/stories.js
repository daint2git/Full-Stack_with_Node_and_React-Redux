import { storiesOf } from '@storybook/react'

import Overlay from './'

storiesOf('Overlay', module)
  .add('default', () => <Overlay />)
  .add('type="modal"', () => <Overlay type="modal" />)
  .add('type="loading"', () => <Overlay type="loading" />)