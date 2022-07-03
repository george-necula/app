const PLAY = 'PLAY'
const CLEAR = 'CLEAR'


export const play = () => {
  return (dispach) => {
    dispach({
      type: PLAY
    })
  }
}


export const clear = () => {
  return (dispach) => {
    dispach({
      type: CLEAR
    })
  }
}