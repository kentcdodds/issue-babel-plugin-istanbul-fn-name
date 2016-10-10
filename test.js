const assert = require('assert')
const {Foo, Bar, Baz, Foobar} = require('./index')

const errors = []

const testFn = (fn, name) => {
  try {
    assert(fn.name === name)
  } catch (err) {
    errors.push(`Function was not named "${name}" but "${fn.name}"`)
  }
}

testFn(Foo, 'Foo')
testFn(Baz, 'Baz')
testFn(Foobar, 'Foobar')
testFn(Bar, 'Bar')

if (errors.length) {
  console.error(errors)
  throw new Error('there were errors 💔')
} else {
  console.log('Passed! 💚')
}

