const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const paths = require('./paths').chrome
const rules = require('./rules')

module.exports = {
  watch: process.env.WATCH_ENV === 'chrome',
  devtool: 'source-map',
  context: paths.root,

  entry: {
    chrome: paths.entry,
  },

  output: {
    path: paths.output,
    filename: 'bundle.js',
  },

  module: {
    rules: [rules.ts, rules.css, rules.sass.dev],
  },

  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss', '.sass'],
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
