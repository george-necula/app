const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const CLEAR_TASKS = 'CLEAR_TASKS'

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      // console.log('added : ', action.payload)
      return [...state, {id: action.payload.id, task: action.payload.task}]
    case REMOVE_TASK:
      // console.log('removed : ', action.payload)
      return state.filter(task => task.id !== action.payload.id)
    case CLEAR_TASKS:
      // console.log('cleard list')
      return []
    default:
      return state
  }
}

export default taskReducer