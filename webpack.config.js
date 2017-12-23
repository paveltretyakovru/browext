var webpackChrome = require('./configs/webpack/webpack.chrome')
var webpackFrontend = require('./configs/webpack/webpack.frontend')

module.exports = (() => {
  const { BUILD_ENV, WATCH_ENV } = process.env

  switch (BUILD_ENV || WATCH_ENV) {
    case 'chrome': return [webpackChrome]
    case 'front': return [webpackFrontend]

    default: return [webpackChrome, webpackFrontend]
  }
})()
