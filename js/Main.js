import React from 'react'

const Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  render () {
    return (
      <main>
        <div className='container'>
          <div className='main-content'>
            {this.props.children}
          </div>
        </div>
      </main>
    )
  }
})

export default Main
