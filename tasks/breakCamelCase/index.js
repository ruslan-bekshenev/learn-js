function solution(word) {
  return word.replace(/([A-Z])/g, ' $1')
}