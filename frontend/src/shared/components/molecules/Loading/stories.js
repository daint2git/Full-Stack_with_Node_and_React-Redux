import { storiesOf } from '@storybook/react'

import Loading from '../Loading'

storiesOf('Loading', module)
  .add('true', () => <Loading loading={true} />)
  .add('false', () => <Loading loading={false} />)