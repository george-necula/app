const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('added 1 to counter, counter is: ', state+1)
      return state + 1
    case DECREMENT:
      console.log('subtracted 1 from counter, counter is: ', state-1)
      return state - 1
    default:
      return state
  }
}

export default counterReducer