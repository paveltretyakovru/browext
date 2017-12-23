const path = require('./helpers/path')

module.exports = {
  nm: path(['node_modules']),
  src: path(['src']),

  chrome: {
    entry: path(['src', 'browser', 'chrome', 'app']),
    output: path(['dist', 'browser', 'chrome', 'app']),
    template: {
      filename: path(['dist', 'browser', 'chrome', 'index.html']),
      template: path(['src', 'browser', 'chrome', 'index.html']),
    }
  },

  frontend: {
    entry: path(['src', 'frontend', 'app']),
    output: path(['dist', 'frontend']),
    template: {
      filename: path(['dist', 'frontend', 'index.html']),
      template: path(['src', 'frontend', 'index.html']),
    }
  }
}
