const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <Link to='/' >
              <h1 className='brand'>Some Branding Here</h1>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
})

module.exports = Header
