import { EXAMPLE_GET_LOADING, EXAMPLE_GET_ERROR, EXAMPLE_GET_SUCCESS, SET_EXAMPLE_RESPONSE } from './actionConstants'
import axios from 'axios'

export function setExampleResponse (exampleResponse) {
  return {
    type: SET_EXAMPLE_RESPONSE,
    exampleResponse
  }
}

export function setExampleViewStateLoading () {
  return {
    type: EXAMPLE_GET_LOADING,
    exampleViewState: 'LOADING'
  }
}

export function setExampleViewStateSuccess () {
  return {
    type: EXAMPLE_GET_SUCCESS,
    exampleViewState: 'SUCCESS'
  }
}

export function setExampleViewStateError () {
  return {
    type: EXAMPLE_GET_ERROR,
    exampleViewState: 'ERROR'
  }
}

export function fetchExampleResponse () {
  return function (dispatch, getState) {
    dispatch(setExampleViewStateLoading())
    return axios.get('/public/data/example.json')
    .then((response) => {
      dispatch(setExampleResponse(response.data))
      dispatch(setExampleViewStateSuccess())
    })
    .catch((error) => {
      console.log(error)
      dispatch(setExampleViewStateError())
    })
  }
}
