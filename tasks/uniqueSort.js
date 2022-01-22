// Задание с собеседования https://youtu.be/HCXDrVikPGk?t=2100
let words = ['grapefruit', 'banana','banana', 'grapefruit', 'banana', 'orange', 'banana']

function uniqueSort(arr) {
  const uniqueObject = arr.reduce((acc, item) => ({ ...acc, [item]: (acc[item] || 0) + 1 }), {})
  const sortValues = Object.keys(uniqueObject).sort((a,b) => uniqueObject[b] - uniqueObject[a])
  return sortValues
}

console.log(uniqueSort(words))

// ['banana', 'grapefruit', 'orange']