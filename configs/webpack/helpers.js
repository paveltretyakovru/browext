const path = require('path');

const projectRoot = path.resolve(__dirname, '..', '..')

module.exports = {
  root: (relpath) => (relpath) ? path.resolve(projectRoot, relpath) : projectRoot
}
