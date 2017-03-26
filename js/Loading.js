import React from 'react'

const style = {
  loading: {
    background: 'rgba(250, 250, 250, .90)',
    height: '100%',
    left: 0,
    margin: 'auto',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    width: '100%'
  },
  loadingText: {
    backgroundColor: '#ffffff',
    display: 'block',
    fontWeight: 700,
    margin: '0 auto',
    padding: '0px 10px',
    position: 'relative',
    top: 'calc(25px + 1.3em)',
    width: 90
  },
  animationContainer: {
    fontSize: 100,
    height: '1em',
    listStyle: 'outside none none',
    margin: '0 auto',
    position: 'relative',
    top: 25,
    width: '1em',
    zIndex: 1
  },
  ball1: {
    borderRadius: '50%',
    height: '0.2em',
    position: 'absolute',
    width: '0.2em',
    animation: '1.13s linear 0s normal none infinite running rotationAnimation, 3.67s ease-in-out 0s alternate none infinite running opacityAnimation',
    background: '#00c176 none repeat scroll 0 0',
    left: '50%',
    margin: '0 0 0 -0.1em',
    top: 0,
    transformOrigin: '50% 250% 0'

  },
  ball2: {
    borderRadius: '50%',
    height: '0.2em',
    position: 'absolute',
    width: '0.2em',
    animation: '1.86s linear 0s normal none infinite running rotationAnimation, 4.29s ease-in-out 0s alternate none infinite running opacityAnimation',
    background: '#ff003c none repeat scroll 0 0',
    margin: '-0.1em 0 0',
    right: 0,
    top: '50%',
    transformOrigin: '-150% 50% 0'

  },
  ball3: {
    borderRadius: '50%',
    height: '0.2em',
    position: 'absolute',
    width: '0.2em',
    animation: '1.45s linear 0s normal none infinite running rotationAnimation, 5.12s ease-in-out 0s alternate none infinite running opacityAnimation',
    background: '#fabe28 none repeat scroll 0 0',
    bottom: 0,
    left: '50%',
    margin: '0 0 0 -0.1em',
    transformOrigin: '50% -150% 0'
  }
}

const Loading = React.createClass({
  propTypes: {
    active: React.PropTypes.bool
  },

  renderLoading () {
    return (
      <div style={style.loading}>
        <ul style={style.animationContainer}>
          <li style={style.ball1} />
          <li style={style.ball2} />
          <li style={style.ball3} />
        </ul>
        <div style={style.loadingText}>Loading&hellip;</div>
      </div>
    )
  },

  renderNotLoading () {
    return (
      <span />
    )
  },

  render () {
    if (this.props.active) {
      return this.renderLoading()
    } else {
      return this.renderNotLoading()
    }
  }
})

export default Loading
