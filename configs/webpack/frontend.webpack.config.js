const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const WATCH_ENV = process.env.WATCH_ENV === 'front'

// Configs
const config = {}
config.paths = require('./paths').frontend
config.rules = require('./rules').ts

module.exports = {
  watch: WATCH_ENV,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..', '..'),

  entry: {
    frontend: config.paths.entry,
  },

  output: {
    path: config.paths.output,
    filename: 'bundle.js',
  },

  module: {
    rules: [config.rules],
  },

  resolve: {
    extensions: ['.ts'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: config.paths.template.filename,
      template: config.paths.template.template,
    }),
  ],
}
