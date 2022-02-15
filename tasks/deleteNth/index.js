function deleteNth(arr,n){
  let numbers = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (numbers[arr[i]] === n) {
      continue
    }
    numbers[arr[i]] = (numbers[arr[i]] || 0) + 1
    result.push(arr[i])
  }
  return result
}


const deleteNth = (a, x) => {
  let m = {};
  return a.filter( v => (m[v] = m[v]+1||1) <= x );
}