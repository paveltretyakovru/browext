const merge = require('webpack-merge')
const WatchIgnorePlugin = require('webpack').WatchIgnorePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = require('./helpers').root
const baseConfig = require('./base.webpack.config')

module.exports = merge(baseConfig, {
  watch: process.env.WATCH_ENV === 'front',

  entry: root('src/frontend/app/index'),

  output: {
    path: root('dist/frontend/app'),
    filename: 'bundle.js',
  },

  plugins: [
    new WatchIgnorePlugin([
      root('node_modules'),
      root('src/browser')
    ]),

    new HtmlWebpackPlugin({ template: root('src/frontend/index.html') }),
  ],
})
