const paths = require('../paths')

module.exports = {
  test: /\.ts?$/,

  loader: 'ts-loader',

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
