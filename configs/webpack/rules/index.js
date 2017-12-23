var jsRule = require('./js')
var tsRule = require('./ts')

module.exports = {
  ts: tsRule,
  js: jsRule,

  all: [tsRule, jsRule],
}
