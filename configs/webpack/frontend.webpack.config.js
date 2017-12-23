const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// Configs
const config = {}
config.paths = require('./paths').frontend
config.rules = require('./rules').all

module.exports = {
  watch: process.env.WATCH_ENV === 'front',
  devtool: 'inline-source-map',
  context: config.paths.root,

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
    extensions: ['.js', '.ts', '.css', '.scss', '.sass'],
  },

  plugins: [
    new WatchIgnorePlugin(config.paths.watchIgnore),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: config.paths.templates.index,
    }),
  ],
}
