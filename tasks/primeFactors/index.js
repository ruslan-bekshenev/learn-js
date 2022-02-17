function primeFactors(n){
  const values = [];
  let dividend = n;
  let divider = 2;
  let isOut = false;
  while (!isOut) {
    if (dividend % divider === 0) {
      dividend = dividend / divider
      values.push(divider)
    } else {
      divider += 1
    }
    if (dividend === 1) {
      isOut = true
    }
  }
  factorsObj = values.reduce((acc, item) => ({ ...acc, [item]: (acc[item] || 0) + 1 }), {})
  const result = Object.keys(factorsObj).map((item) => factorsObj[item] > 1 ? `(${item}**${factorsObj[item]})` : `(${item})`).join('')
  return result;
}

