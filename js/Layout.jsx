const React = require('react')
const Header = require('./Header')
const Footer = require('./Footer')

const Layout = (props) => (
  <div className='app-container'>
    <Header />
      <div className='container'>
        {props.children}
      </div>
    <Footer />
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
