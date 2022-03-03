
function palindrome(str) {
  const length = Math.floor(str.length / 2);
  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }
  return true
}
console.log(palindrome('довод'))