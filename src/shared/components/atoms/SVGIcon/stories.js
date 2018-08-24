import { storiesOf } from '@storybook/react'

import {
  IconFilePdf,
  IconFileWord,
  IconFileExcel,
  IconFilePowerPoint,
  IconFileZip,
  IconOtherFile,
  IconLoading
} from '../SVGIcon'

storiesOf('SVGIcon', module)
  .add('IconFilePdf', () => <IconFilePdf />)
  .add('IconFileWord', () => <IconFileWord />)
  .add('IconFileExcel', () => <IconFileExcel />)
  .add('IconFilePowerPoint', () => <IconFilePowerPoint />)
  .add('IconFileZip', () => <IconFileZip />)
  .add('IconOtherFile', () => <IconOtherFile />)
  .add('IconLoading', () => <IconLoading width={40} height={40} />)