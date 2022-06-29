export const depositMoney = (amount) => {
  return (dispach) => {
    dispach({
      type: 'DEPOSIT',
      payload: amount
    })
  }
}

export const withdrawMoney = (amount) => {
  return (dispach) => {
    dispach({
      type: 'WITHDRAW',
      payload: amount
    })
  }
}



