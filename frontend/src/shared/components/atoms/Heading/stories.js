import { storiesOf } from '@storybook/react'

import Heading from './'

storiesOf('ATOMS|Heading', module)
  .add('default', () => <Heading>Heading default</Heading>)
  .add('component', () => (
    <>
      <Heading component="h1">Heading component="h1"</Heading>
      <Heading component="h2">Heading component="h2"</Heading>
      <Heading component="h3">Heading component="h3"</Heading>
      <Heading component="h4">Heading component="h4"</Heading>
      <Heading component="h5">Heading component="h5"</Heading>
      <Heading component="h6">Heading component="h6"</Heading>
    </>
  ))