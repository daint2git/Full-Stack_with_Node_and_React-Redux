export const showPrice = price => {
  let string = price.toString()
  let count = 0
  let result = ''
  for (let i = 0, length = string.length; i < length; i++) {
    count++
    result = string.charAt(length - 1 - i) + result
    if (count === 3) {
      if (i < length - 1) {
        result = `.${result}`
      }
      count = 0
    }
  }
  return result
}
