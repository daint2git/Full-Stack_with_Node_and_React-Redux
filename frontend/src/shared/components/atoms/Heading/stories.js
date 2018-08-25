import { storiesOf } from '@storybook/react'

import Heading from '../Heading'

storiesOf('Heading', module)
  .add('default', () => <Heading>Heading</Heading>)
  .add('component="h1"', () => <Heading component="h1">Heading component="h1"</Heading>)
  .add('component="h2"', () => <Heading component="h2">Heading component="h2"</Heading>)
  .add('component="h3"', () => <Heading component="h3">Heading component="h3"</Heading>)