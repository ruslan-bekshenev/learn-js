/**
 * My solution
 * */

function sumTwoSmallestNumbers(numbers) {
  const arr = numbers.sort((a,b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0
  })
  return arr[0] + arr[1]
}

/**
 * Better solution
 * */

function sumTwoSmallestNumbers(numbers) {
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}