const { DefinePlugin, ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const assetsPath = path.resolve(rootDir, 'assets')
const buildPath = path.resolve(rootDir, 'build')

const getMode = mode => mode ? mode : 'development'

module.exports = (env = {}, argv = {}) => {
  const devMode = getMode(argv.mode) === 'development'
  return {
    context: srcPath, // setting for debug
    mode: getMode(argv.mode),
    entry: {
      app: `${srcPath}/client/app.js`,
    },
    output: {
      path: buildPath,
      filename: devMode ? '[name].js' : '[name].[hash].js',
      publicPath: '/',
    },
    devtool: 'source-map', // setting for debug
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(c|sc)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              }
            },
            'postcss-loader',
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              }
            },
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'all',
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${assetsPath}/template.html`,
        favicon: `${assetsPath}/favicon.ico`,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
      new DefinePlugin({
        STORY_BOOK: JSON.stringify(false),
      }),
      new ProvidePlugin({
        React: 'react',
      }),
    ],
    devServer:
      devMode
        ? {
            contentBase: buildPath,
            port: 6969,
            open: true,
            historyApiFallback: true,
            proxy: {
              '/api': 'http://localhost:9696',
            },
          }
        : {}
  }
}