const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const WATCH_ENV = process.env.WATCH_ENV === 'chrome'

const config = {}
config.paths = require('./paths').chrome
config.rules = require('./rules').ts

module.exports = {
  watch: WATCH_ENV,
  context: path.resolve(__dirname, '..', '..'),

  entry: {
    chrome: config.paths.entry,
  },

  output: {
    path: path.resolve('dist', 'browser', 'chrome'),
    filename: 'bundle.js',
  },

  module: {
    rules: [config.rules],
  },

  resolve: {
    extensions: ['.ts'],
  },

  devtool: 'inline-source-map',

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new WatchIgnorePlugin(config.paths.watchIgnore),
    new HtmlWebpackPlugin({
      filename: config.paths.template.filename,
      template: config.paths.template.template,
    }),
  ],
}
