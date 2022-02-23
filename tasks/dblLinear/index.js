function dblLinear(n) {
  let i = 1;
  const arr = [1]
  while (i <= n) {
    arr.push(2 * arr[i - 1] + 1);
    arr.push(3 * arr[i - 1] + 1);
    i++;
  }
  const result = [...new Set(arr.sort((a, b) => a - b))]
  console.log(result)
  return result[n]
}
dblLinear(10)
dblLinear(20)
dblLinear(30)
dblLinear(50)
dblLinear(100)