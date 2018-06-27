const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const staticsPath = path.resolve(rootDir, 'statics')
const buildPath = path.resolve(rootDir, 'build')

module.exports = (env, argv) => {
  return {
    mode: argv.mode ? 'production' : 'development',
    entry: {
      app: `${srcPath}/client/app.js`
    },
    output: {
      path: buildPath,
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'all'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${staticsPath}/template.html`,
        favicon: `${staticsPath}/favicon.ico`,
        filename: 'index.html'
      })
    ],
    devServer: {
      contentBase: buildPath,
      port: 9999,
      open: true,
      historyApiFallback: true
    }
  }
}