const PLAY = 'PLAY'
const CLEAR = 'CLEAR'

const gameOfLifeReducer = (state = { clear: false, play: false }, action) => {
  switch (action.type) {
    case PLAY:
      console.log((!state.playState) ? 'starded game of life sim' : 'stoped game of life sim')
      return { clear: state.clear, play: !state.play }
    case CLEAR:
      console.log('game cleard')
      return { clear: !state.clear, play: state.play }

    default:
      return state
  }
}

export default gameOfLifeReducer;