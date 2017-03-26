import { EXAMPLE_GET_LOADING, EXAMPLE_GET_ERROR, EXAMPLE_GET_SUCCESS, SET_EXAMPLE_RESPONSE } from '../actions/actionConstants'

const DEFAULT_STATE = {
  exampleResponse: {},
  getExampleViewState: 'LOADING'
}

const setExampleResponse = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {exampleResponse: action.exampleResponse})
  return newState
}

const changeGetExampleViewState = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {getExampleViewState: action.exampleViewState})
  return newState
}

const exampleReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_EXAMPLE_RESPONSE:
      return setExampleResponse(state, action)
    case EXAMPLE_GET_LOADING:
      return changeGetExampleViewState(state, action)
    case EXAMPLE_GET_ERROR:
      return changeGetExampleViewState(state, action)
    case EXAMPLE_GET_SUCCESS:
      return changeGetExampleViewState(state, action)
    default:
      return state
  }
}

export default exampleReducer
