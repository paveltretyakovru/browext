const merge = require('webpack-merge');
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

const root = require('./helpers').root
const webpackCommon = require('./webpack.common')

const src = 'src/cross'
const dist = 'dist/cross'

module.exports = merge(webpackCommon, {
  watch: process.env.WATCH_ENV === 'cross',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    root(`${src}/main`),
  ],

  output: {
    path: root(`${dist}`),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new WatchIgnorePlugin([root('node_modules')]),

    new CopyWebpackPlugin([
      { from: root(`${src}/assets`), ignore: ['popup.html'] },
    ]),

    new HtmlWebpackPlugin({
      template: root('src/cross/index.html'),
      filename: root('dist/cross/index.html'),
    }),

    new HtmlWebpackPlugin({
      template: root(`${src}/assets/popup.html`),
      filename: root(`${dist}/popup.html`),
    }),
  ],

  devServer: {
    port: 8080,
    publicPath: 'dist/cross',
    contentBase: root('dist/cross'),
  }
})
