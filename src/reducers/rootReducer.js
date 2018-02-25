import { combineReducers } from 'redux'
import questionReducer from './fv-questionReducer'


// This becomes our application state object
const rootReducer = combineReducers({
  questions: questionReducer,
})

export default rootReducer
