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
    maximumFractionDigits: '5'
  }).format(num);
}

export const getAvg = (array) => {
  const changeCount = array.length
  const [priceStart] = array[0]
  const [priceEnd] = array[changeCount - 1]
  const sums = {
    price: +priceEnd - +priceStart,

  }
  return {
    avgPrice: decimalToFormat( sums.price ),
    changeCount
  }
}

export const updateLevel = (currentLevel, changes) => {
  return [...changes, ...currentLevel.slice(0, currentLevel.length - changes.length) ]
}