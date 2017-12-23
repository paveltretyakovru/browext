const path = require('./helpers/path')
const chromeSrcPath = path(['src', 'browser', 'chrome'])
const chromeDistPath = path(['dist', 'browser', 'chrome'])

module.exports = {
  nm: path(['node_modules']),
  src: path(['src']),
  root: path(),

  chrome: {
    root: path(),
    entry: path(['src', 'browser', 'chrome', 'app', 'index']),
    output: path(['dist', 'browser', 'chrome']),
    templates: {
      popup: {
        src: path(['src', 'browser', 'chrome', 'popup.html']),
        dist: path(['dist', 'browser', 'chrome', 'popup.html'])
      }
    },
    watchIgnore: [
      path(['node_modules']),
      path(['src', 'frontend'])
    ],
    copy: [
      { from: path(['manifest.json'], chromeSrcPath), to: chromeDistPath },
      { from: path(['icon.png'], chromeSrcPath), to: chromeDistPath },
    ]
  },

  frontend: {
    root: path(),
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
