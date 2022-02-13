function towerBuilder(nFloors) {
  const tower = [];
  let maxStars = "*".repeat(nFloors*2-1)
  for (let i = 0; i < nFloors; i++) {
    if (i === 0) {
      tower[i] = maxStars;
    }
    else {
      const arr = tower[i - 1].split('')
      arr[i - 1] = " ";
      arr[maxStars.length - i] = " ";
      tower[i] = arr.join('');
    }
  }
  return tower;
}

towerBuilder(3)

/**
 * better solution
 */

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}