import { configure } from '@storybook/react'

import 'shared/components/utils/root.scss'

const stories = require.context('../src/shared/components', true, /.stories\.js$/)

configure(stories.keys().forEach(stories), module)