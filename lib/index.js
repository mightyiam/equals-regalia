const reverse = require('regalia-reverse')
const isEqual = require('lodash.isequal')

const equalsRegalia = (regaliaTree, definitionTree) => {
  return isEqual(reverse(regaliaTree), definitionTree)
}

module.exports = equalsRegalia
