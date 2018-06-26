const getDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')
const getAppConfig = require('../webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = getDefaultConfig(baseConfig, env)
  config.module.rules = getAppConfig().module.rules
  config.module.rules.push({
    test: /stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  return config
}