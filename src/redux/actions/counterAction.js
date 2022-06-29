export const increment = () => dispach => {
  dispach({
    type: 'INCREMENT'
  })
}

 
export const decrement = () => dispach => {
  dispach({
    type: 'DECREMENT'
  })
}

