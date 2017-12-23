const path = require('./helpers/path')

module.exports = {
  nm: path(['node_modules']),
  src: path(['src']),
  root: path([]),

  chrome: {
    root: path([]),
    entry: path(['src', 'browser', 'chrome', 'app', 'index']),
    output: path(['dist', 'browser', 'chrome', 'app']),
    templates: {
      popup: path(['src', 'browser', 'chrome', 'popup.html'])
    },
    watchIgnore: [
      path(['node_modules']),
      path(['src', 'frontend'])
    ],
  },

  frontend: {
    root: path([]),
    entry: path(['src', 'frontend', 'app', 'index']),
    output: path(['dist', 'frontend']),
    templates: {
      index: path(['src', 'frontend', 'index.html'])
    },
    watchIgnore: [
      path(['node_modules']),
      path(['src', 'browser'])
    ],
  }
}
