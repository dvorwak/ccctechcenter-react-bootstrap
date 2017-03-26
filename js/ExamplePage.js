import React from 'react'
import PageWrapper from './PageWrapper'
import Example from './Example'
const style = {
  header: {
    fontSize: 48,
    fontWeight: 700,
    margin: '10px 0 3px',
    padding: 0
  }
}

const ExamplePage = React.createClass({
  render () {
    return (
      <PageWrapper>
        <div>
          <h1 className='card-title' style={style.header}>Example Page for CCCTC React Example App</h1>
          <p id='selectTermMessage' aria-hidden='true'>Welcome to the Example App! Below is a component that renders asynchronously, copy the pattern for any endpoints you need to add!</p>
          <Example />
        </div>
      </PageWrapper>
    )
  }
})

export default ExamplePage
