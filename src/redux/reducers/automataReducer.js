const CHANGEPLAYSTATE = 'CHANGEPLAYSTATE'
const CHANGERULE = 'CHANGERULE'
const RESTART = 'RESTART'

 const automataReducer = (state = { restart: false, playState: false, rule: 50 }, action) => {
  switch (action.type) {
    case CHANGEPLAYSTATE:
      console.log((!state.playState) ? 'starded sim' : 'stoped sim')
      return { restart: state.restart, playState: !state.playState, rule: state.rule }
    case CHANGERULE:
      console.log('changed rule to : ', action.payload)
      return { restart: state.restart, playState: state.playState, rule: action.payload }
    case RESTART:
      console.log('restarted')
      return { restart: !state.restart, playState: state.playState, rule: state.rule }
    
    default:
      return state
  }
}

export default automataReducer;