import { configure } from '@storybook/react'

const stories = require.context('../src/shared/components', true, /.stories\.js$/)

configure(stories.keys().forEach(stories), module)