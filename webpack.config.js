const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// Configs
const configs = {}
configs.rules = require('./configs/webpack/rules')
configs.paths = require('./configs/webpack/paths')

module.exports = {
  context: __dirname,

  entry: {
    [configs.paths.chrome.output]: configs.paths.chrome.entry,
  },

  output: {
    filename: '[name].js'
  },

  module: {
    rules: configs.rules,
  },

  resolve: {
    extensions: ['.ts'],
  },

  devtool: 'inline-source-map',

  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],

  devServer: {},
}
