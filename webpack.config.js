const htmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const staticsPath = path.resolve(rootDir, 'statics')
const buildPath = path.resolve(rootDir, 'build')

module.exports = (env, argv) => {
  const mode = 'development'
  return {
    mode,
    // entry: nơi nạp các file cần xử lý
    entry: {
      app: `${srcPath}/client/app.js`
    },
    // output: nơi các file được xuất ra
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
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|ico)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
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
    // plugins: nạp các plugin từ bên thứ 3 vào để làm các công việc như nén file js, css, vv
    plugins: [
      new htmlWebpackPlugin({
        template: `${staticsPath}/template.html`,
        favicon: `${staticsPath}/react.ico`,
        filename: 'index.html'
      })
    ],
    devServer: {
      contentBase: buildPath,
      port: 9999,
      open: true,
      historyApiFallback: true // khi mà history API trả về 404 sẽ chuyển về index.html
    }
  }
}