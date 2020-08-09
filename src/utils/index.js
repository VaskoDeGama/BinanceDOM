export const timeToFormat = (date) => {
    return new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    }).format(date);
}

export const decimalToFormat = (num) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    maximumFractionDigits: '3'
  }).format(num);
}

export const getAvg = (array) => {
  const changeCount = array.length
  const sums = array.reduce(( sums,[price,amount]) => {
    return {
      price: sums.price + +price,
      amount: sums.amount + +amount,
    }
  }, {price: 0, amount: 0} )
  return {
    avgPrice: decimalToFormat( sums.price / changeCount),
    avgAmount: decimalToFormat (sums.amount / changeCount),
    changeCount
  }
}