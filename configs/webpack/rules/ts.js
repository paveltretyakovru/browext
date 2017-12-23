const paths = require('../paths')

module.exports = {
  test: /\.ts?$/,

  loader: 'awesome-typescript-loader',

  include: [
    paths.src
  ],

  exclude: [
    paths.nm
  ],

  options: {
    transpileOnly: true,
  },
}
