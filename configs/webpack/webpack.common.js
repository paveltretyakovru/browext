const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const helpers = require('./helpers')
const root = helpers.root

const webpackCommon = {
  devtool: 'source-map',

  context: helpers.root(),

  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss', '.sass']
  },

  entry: [
    root('src/shared/polyfills.ts'),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },

      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },

      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        include: [root('src')],
        exclude: [root('node_modules')],
        options: { transpileOnly: true },
      },

      /**
       * For REQUIRING scss to component style scope ->
       * @Component { styles: [require('./my-style.component.scss')] }
       */
      {
        test: /\.component.scss$/,
        loader: ['raw-loader', 'sass-loader?sourceMap']
      },

      /**
       * For IMPORTING scss to global scope -> import './my.styles.scss'
       */
      {
        test: /\.styles.s[ac]ss$/,
        include: [root('src')],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({ Reflect: 'core-js/es7/reflect' }),
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, root('src')),
  ],
}

/**
 * If user using VSCode for work, then initial webpack status plugin for the IDE
 * bitbar-webpack-progress-plugin
 */
try {
  const VSCodeProgressPlugin = require.resolve('bitbar-webpack-progress-plugin')
  webpackCommon.plugins = [
    new VSCodeProgressPlugin(), ...webpackCommon.plugins
  ]
} catch (e) {
  console.info('If you use the VSCode IDE. You can install bitbar-webpack-progress-plugin for looking webpack progress in the bitbar')
}

module.exports = webpackCommon
