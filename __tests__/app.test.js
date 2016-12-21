const App = require('../app')
const React = require('react')
const toJSON = require('enzyme-to-json').default
const shallow = require('enzyme').shallow

describe('app', () => {
  it('should render', () => {
    const tree = toJSON(shallow(<App />))

    expect(tree).toMatchSnapshot()
  })
})
