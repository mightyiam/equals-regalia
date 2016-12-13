const { test } = require('ava')
const regalia = require('regalia')

const subject = require('.')

test('equal', (t) => {
  const regaliaTree = regalia(['foo', 'bar'])
  t.true(subject(regaliaTree, ['foo', 'bar']))
})

test('not equal', (t) => {
  const regaliaTree = regalia(['foo', 'bar'])
  t.false(subject(regaliaTree, ['foo']))
})
