import React from 'react'
import Loading from './Loading'

const Card = React.createClass({
  propTypes: {
    children: React.PropTypes.array,
    loading: React.PropTypes.bool,
    style: React.PropTypes.object
  },
  renderCenteredCard () {
    return (
      <div className='d-flex justify-content-center'>
        {this.renderCard()}
      </div>
    )
  },
  renderCard () {
    return (
      <div className='card' style={this.props.style}>
        <Loading active={this.props.loading} />
        {this.props.children}
      </div>
    )
  },
  render () {
    let props = this.props
    if (props.center) {
      return (
        this.renderCenteredCard()
      )
    } else {
      return (
        this.renderCard()
      )
    }
  }
})

export default Card
