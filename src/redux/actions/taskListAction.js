const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const CLEAR_TASKS = 'CLEAR_TASKS'

export const addTask = (id, task) => {
  return (dispach) => {
    dispach({
      type: ADD_TASK,
      payload: {id: id, task: task}
    })
  }
}

export const removeTask = (id) => {
  return (dispach) => {
    dispach({
      type: REMOVE_TASK,
      payload: {id: id}
    })
  }
}

export const clearTasks = () => {
  return (dispach) => {
    dispach({
      type: CLEAR_TASKS
    })
  }
}

