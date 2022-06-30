import { combineReducers } from "redux"
import accountReducer from "./simpleReducer"
import counterReducer from "./counterReducer"
import taskReducer from "./taskReducer"
import automataReducer from './automataReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  counter: counterReducer,
  taskList: taskReducer,
  automata: automataReducer 
})

export default rootReducer