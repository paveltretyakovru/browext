const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const helpers = require('./helpers')
const root = helpers.root

const baseWebpackConfig = {
  devtool: 'source-map',
  context: helpers.root(),

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /.js?$/,
        include: [root('src')],
        exclude: [root('node_modules')],
        loader: 'babel-loader',
        query: { presets: ['es2015'] },
      },
      {
        test: /\.s[ac]ss$/,
        include: [root('src')],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        include: [root('src')],
        exclude: [root('node_modules')],
        options: { transpileOnly: true },
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss', '.sass'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
}

module.exports = baseWebpackConfig
