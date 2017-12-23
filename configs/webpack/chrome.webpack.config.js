const merge = require('webpack-merge')
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const root = require('./helpers').root
const baseConfig = require('./base.webpack.config')

const src = 'src/browser/chrome'
const dist = 'dist/browser/chrome'

module.exports = merge(baseConfig, {
  watch: process.env.WATCH_ENV === 'chrome',

  entry: root(`${src}/app/index`),

  output: {
    path: root(`${dist}/app`),
    filename: 'bundle.js',
  },

  plugins: [
    new WatchIgnorePlugin([root('node_modules'), root('src/frontend')]),

    new CopyWebpackPlugin([
      { from: root(`${src}/manifest.json`), to: root(dist) },
      { from: root(`${src}/icon.png`), to: root(dist) },
    ]),

    new HtmlWebpackPlugin({
      template: root(`${src}/popup.html`),
      filename: root(`${dist}/popup.html`),
    }),
  ],
})
