import { combineReducers } from 'redux'
import questionReducer from './fv-questionReducer'
import selectorReducer from './fv-selectorReducer'


// This becomes our application state object
const rootReducer = combineReducers({
  questions: questionReducer,
  activeQ: selectorReducer,
})

export default rootReducer
