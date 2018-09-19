import { storiesOf } from '@storybook/react'

import Loading from './'

storiesOf('Loading', module)
  .add('true', () => <Loading loading={true} />)
  .add('false', () => <Loading loading={false} />)