var webpackCross = require('./configs/webpack/webpack.cross');
var webpackChrome = require('./configs/webpack/webpack.chrome')
var webpackFrontend = require('./configs/webpack/webpack.frontend')

module.exports = (() => {
  const { BUILD_ENV, WATCH_ENV } = process.env;

  return [webpackCross];

  // switch (BUILD_ENV || WATCH_ENV) {
  //   case 'cross': return [webpackCross];
  //   case 'front': return [webpackFrontend];
  //   case 'chrome': return [webpackChrome];

  //   default: return [webpackChrome, webpackFrontend, webpackCross];
  // }
})()
