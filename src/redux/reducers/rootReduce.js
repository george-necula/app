import { combineReducers } from "redux"
import accountReducer from "./simpleReducer"
import counterReducer from "./counterReducer"
import taskReducer from "./taskReducer"
import automataReducer from './automataReducer'
import gameOfLifeReducer from "./gameOfLifeReducer"

const rootReducer = combineReducers({
  account: accountReducer,
  counter: counterReducer,
  taskList: taskReducer,
  automata: automataReducer,
  gameOfLife: gameOfLifeReducer
})

export default rootReducer