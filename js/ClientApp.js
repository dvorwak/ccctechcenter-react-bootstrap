import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Match } from 'react-router'
import ExamplePage from './ExamplePage'
import '../public/bootstrap-grid.css'
import '../public/bootstrap-reboot.css'
import '../public/bootstrap.css'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={ExamplePage} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
