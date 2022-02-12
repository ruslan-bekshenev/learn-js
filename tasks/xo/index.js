
/**
 * My solution
 * */
function XO(str) {
  const xLength = (str.toLowerCase().match(/x/g) || []).length
  const oLength = (str.toLowerCase().match(/o/g) || []).length
  return xLength === oLength
}
/**
 * Better
 * */
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}