const HtmlWebpackPlugin = require('html-webpack-plugin')
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const paths = require('./paths').chrome
const rules = require('./rules').ts

module.exports = {
  watch: process.env.WATCH_ENV === 'chrome',
  devtool: 'inline-source-map',
  context: paths.root,

  entry: {
    chrome: paths.entry,
  },

  output: {
    path: paths.output,
    filename: 'bundle.js',
  },

  module: {
    rules: [rules],
  },

  resolve: {
    extensions: ['.ts'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new WatchIgnorePlugin(paths.watchIgnore),
    new CopyWebpackPlugin(paths.copy),
    new HtmlWebpackPlugin({
      template: paths.templates.popup.src,
      filename: paths.templates.popup.dist,
    }),
  ],
}
