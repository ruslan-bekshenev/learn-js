function validParentheses(parens) {
  let result = 0
  for (let i = 0; i < parens.length; i++) {
    if (result >= 0) {
      result += parens[i] === '(' ? 1 : -1
    }
  }

  return result === 0
}

console.log(validParentheses('())('))