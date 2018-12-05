import { configure, addDecorator } from '@storybook/react'
import addonBackgrounds from '@storybook/addon-backgrounds'
import { setOptions } from '@storybook/addon-options'

import 'shared/components/utils/root.scss'
import 'shared/components/utils/fortawesomeLoader.js'

import './styles.scss'

const backgrounds = addonBackgrounds([
  { name: 'white', value: '#FFF', default: true },
  { name: 'black', value: '#000' },
])

addDecorator(backgrounds)

setOptions({
  hierarchyRootSeparator: /\|/,
})

const stories = require.context('../src/shared/components', true, /.stories\.js$/)

configure(stories.keys().forEach(stories), module)
