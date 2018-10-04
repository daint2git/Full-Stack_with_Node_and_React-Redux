const PLUGINS = [
  "postcss-custom-selectors",
  "postcss-nested",
  "postcss-import",
  "postcss-simple-vars",
  "autoprefixer"
]

module.exports = {
  plugins: PLUGINS.map(plugin => require(plugin))
}