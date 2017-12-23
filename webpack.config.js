var chromeWebpackConfig = require('./configs/webpack/chrome.webpack.config')
var frontendWebpackConfig = require('./configs/webpack/frontend.webpack.config')

const spotBuilds = () => {
  const { BUILD_ENV, WATCH_ENV } = process.env

  switch (BUILD_ENV || WATCH_ENV) {
    case 'chrome': return [chromeWebpackConfig]
    case 'front': return [frontendWebpackConfig]

    default: return [chromeWebpackConfig, frontendWebpackConfig]
  }
}

module.exports = spotBuilds()
