import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

import 'shared/components/utils/root.scss'
import 'shared/components/utils/fortawesomeLoader.js'

setOptions({
  hierarchyRootSeparator: /\|/,
})

const stories = require.context('../src/shared/components', true, /.stories\.js$/)

configure(stories.keys().forEach(stories), module)