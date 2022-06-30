const CHANGEPLAYSTATE = 'CHANGEPLAYSTATE'
const CHANGERULE = 'CHANGERULE'
const RESTART = 'RESTART'


export const changeState = () => {
  return (dispach) => {
    dispach({
      type: CHANGEPLAYSTATE
    })
  }
}

export const changeRule = (rule) => {
  return (dispach) => {
    dispach({
      type: CHANGERULE,
      payload: rule
    })
  }
}

export const restart = () => {
  return (dispach) => {
    dispach({
      type: RESTART
    })
  }
}