function sumOfDivided(list) {
  const re = []
  const maxNum = Math.max(...list.map(Math.abs))
  const nonPrimes = {}

  for (let i = 2; i <= maxNum; i++) {
    let sum
    if (nonPrimes[i]) {
      continue
    }

    for (let j = i * 2; j <= maxNum; j += i) {
      nonPrimes[j] = true
    }

    for (const n of list) if (n % i === 0) sum = (sum || 0) + n
    if (sum !== undefined) re.push([i, sum])
  }

  return re
}