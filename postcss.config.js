const PLUGINS =[
  "postcss-custom-selectors",
  "postcss-nested",
  "autoprefixer"
]

module.exports = {
  plugins: PLUGINS.map(plugin => require(plugin))
}