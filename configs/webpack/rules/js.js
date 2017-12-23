const paths = require('../paths')

const jsLoader = 'babel-loader'

module.exports = {
  test: /.js?$/,

  include: [
    paths.src
  ],

  exclude: [
    paths.nm
  ],

  loader: jsLoader,

  query: {
    presets: ['es2015']
  },
}
