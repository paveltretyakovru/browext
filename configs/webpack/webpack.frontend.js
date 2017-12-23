const merge = require('webpack-merge')
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = require('./helpers').root
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
  watch: process.env.WATCH_ENV === 'front',

  entry: {
    frontend: root('src/frontend/app/index')
  },

  output: {
    path: root('dist/frontend/app'),
    filename: '[name].js',
  },

  plugins: [
    new WatchIgnorePlugin([
      root('node_modules'),
      root('src/browser')
    ]),

    new HtmlWebpackPlugin({ template: root('src/frontend/index.html') }),
  ],
})
