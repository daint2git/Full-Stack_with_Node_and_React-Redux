import { storiesOf } from '@storybook/react'

import RowSeparateLine from './'

storiesOf('RowSeparateLine', module)
  .add('default', () => <RowSeparateLine />)
  .add('margin={5}', () => <RowSeparateLine margin={5} />)
  .add('margin={10}', () => <RowSeparateLine margin={10} />)
  .add('margin={15}', () => <RowSeparateLine margin={15} />)
  .add('margin={20}', () => <RowSeparateLine margin={20} />)