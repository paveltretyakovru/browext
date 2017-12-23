const jsRule = require('./js')
const tsRule = require('./ts')
const cssRule = require('./css')
const sassRule = require('./sass')

module.exports = {
  ts: tsRule,
  js: jsRule,
  css: cssRule,
  sass: sassRule,

  all: [tsRule, jsRule, sassRule, cssRule],
}
