function solution(number){
  if (isNaN(number) || number < 0) return 0
  return Array.from(Array(number).keys())
    .filter((item) => (item % 5 === 0) || (item % 3 === 0))
    .reduce((acc, item) => acc + item, 0)
}