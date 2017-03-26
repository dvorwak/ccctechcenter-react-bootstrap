import React from 'react'
import { fetchExampleResponse } from './actions/exampleAction'
import Loading from './Loading'
import { connect } from 'react-redux'
const { string, func, object } = React.PropTypes

const Example = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    exampleResponse: object,
    dispatch: func,
    getExampleViewState: string
  },
  componentDidMount () {
    this.props.dispatch(fetchExampleResponse()).then(() => {
      console.log(this.props.exampleResponse)
    })
  },
  render () {
    let exampleHtml
    if (this.props.getExampleViewState === 'SUCCESS') {
      const exampleResponse = this.props.exampleResponse.people
      exampleHtml = (
        <table className='table'>
          <tbody>
            {exampleResponse.map((person) => {
              return (
                <tr key={person.some_other_key}>
                  <td>{person.name}</td>
                  <td>{person.info}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
      console.log(exampleHtml)
      return (
        <div className='container'>
          <div className='row'>
            <h5>List of people from /public/data/example.json</h5>
          </div>
          <div className='row'>
            <div className='example-output'>
              {exampleHtml}
            </div>
          </div>
        </div>
      )
    } else if (this.props.getExampleViewState === 'LOADING') {
      return (
        <Loading active />
      )
    } else {
      return (
        <Loading active />
      )
    }
  }
})

const mapStateToProps = (state) => {
  return {
    exampleResponse: state.exampleReducer.exampleResponse,
    getExampleViewState: state.exampleReducer.getExampleViewState
  }
}

export default connect(mapStateToProps)(Example)
