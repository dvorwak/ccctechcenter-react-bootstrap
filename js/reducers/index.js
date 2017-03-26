import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'

const rootReducer = combineReducers({
  exampleReducer: exampleReducer
})

export default rootReducer
