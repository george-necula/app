import { combineReducers } from "redux"
import accountReducer from "./simpleReducer"
import counterReducer from "./counterReducer"
import taskReducer from "./taskReducer"

const rootReducer = combineReducers({
  account: accountReducer,
  counter: counterReducer,
  taskList: taskReducer
})

export default rootReducer