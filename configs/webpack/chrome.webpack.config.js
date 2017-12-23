const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const config = {}
config.paths = require('./paths').chrome
config.rules = require('./rules').ts

module.exports = {
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
    new HtmlWebpackPlugin({
      filename: config.paths.template.filename,
      template: config.paths.template.template,
    }),
  ],
}
