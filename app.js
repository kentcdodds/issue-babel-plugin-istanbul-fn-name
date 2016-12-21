const React = require('react')

const Header = () => (
  <header>I am header</header>
)

const Footer = () => (
  <footer>I am footer</footer>
)

const App = () => (
  <div>
    <Header />
    <main>I am content</main>
    <Footer />
  </div>
)

module.exports = App
