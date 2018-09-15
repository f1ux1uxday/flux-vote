import { combineReducers } from 'redux'
import questionReducer from './fv-questionReducer'
import selectorReducer from './fv-selectorReducer'
import userReducer from './fv-userReducer'

// This becomes our application state object
const rootReducer = combineReducers({
  questions: questionReducer,
  activeQ: selectorReducer,
  user: userReducer,
})

export default rootReducer
