import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const PageWrapper = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  render () {
    return (
      <div className='page-wrapper'>
        <Header />
        <Main>
          {this.props.children}
        </Main>
        <Footer />
      </div>
    )
  }
})

export default PageWrapper
