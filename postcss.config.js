const PLUGINS =[
  "autoprefixer"
]

module.exports = {
  plugins: PLUGINS.map(plugin => require(plugin))
}