const merge = require('webpack-merge')
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const root = require('./helpers').root
const webpackCommon = require('./webpack.common')

const src = 'src/browser/chrome'
const dist = 'dist/browser/chrome'

module.exports = merge(webpackCommon, {
  watch: process.env.WATCH_ENV === 'chrome',

  entry: {
    chrome: root(`${src}/main`)
  },

  output: {
    path: root(`${dist}`),
    filename: '[name].js',
  },

  plugins: [
    new WatchIgnorePlugin([root('node_modules'), root('src/frontend')]),

    new CopyWebpackPlugin([
      { from: root(`${src}/assets`), ignore: ['popup.html'] },
    ]),

    new HtmlWebpackPlugin({
      template: root(`${src}/assets/popup.html`),
      filename: root(`${dist}/popup.html`),
    }),
  ],
})
