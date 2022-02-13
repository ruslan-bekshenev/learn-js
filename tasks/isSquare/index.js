var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0; // fix me
}

/**
 * another solution
 */

const isSquare = n => Number.isInteger(Math.sqrt(n));