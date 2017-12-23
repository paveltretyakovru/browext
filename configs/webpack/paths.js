const path = require('./helpers/path')

module.exports = {
  nm: path(['node_modules']),
  src: path(['src']),

  chrome: {
    entry: path(['src', 'browser', 'chrome', 'app']),
    output: 'dist/browser/chrome/bundle',
  }
}
