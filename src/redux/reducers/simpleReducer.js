const DEPOSIT = 'DEPOSIT'
const WITHDRAW = 'WITHDRAW'

const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload
    case WITHDRAW:
      return state - action.payload
    default:
      return state
  }
}

export default accountReducer;