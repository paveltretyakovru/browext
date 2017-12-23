const paths = require('../paths')

module.exports = {
  dev: {
    test: /\.s[ac]ss$/,
    include: [paths.src],
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader', options: { sourceMap: true } },
      { loader: 'sass-loader', options: { sourceMap: true } },
    ],
  }
}
