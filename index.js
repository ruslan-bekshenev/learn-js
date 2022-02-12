function XO(str) {
  const xLength = (str.match(/x/g) || []).length
  const oLength = (str.match(/o/g) || []).length
  return xLength === oLength
}

console.log(XO('xoxo'))
console.log(XO('xoxoo'))
console.log(XO('zpzpx'))