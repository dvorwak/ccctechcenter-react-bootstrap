const redux = require('redux')
const reactRedux = require('react-redux')


const SET_CURRENT_TERM = 'currentTerm'
const initialState = {
  currentTerm: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TERM:
      return reduceCurrentTerm(state, action)
    default:
      return state
  }
}

const reduceCurrentTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {currentTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  // Remove for production just keep rootReducer, this is all just for redux dev tools
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    currentTerm: state.currentTerm,
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentTerm: (currentTerm) => {
      dispatch({type: SET_CURRENT_TERM, value: currentTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = {connector, store, rootReducer}
