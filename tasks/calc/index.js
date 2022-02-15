
function calc(number, operation) {
  return operation ? operation(number) : number
}

function zero(operation) {
  return calc(0, operation)
}
function one(operation) {
  return calc(1, operation)
}
function two(operation) {
  return calc(2, operation)
}
function three(operation) {
  return calc(3, operation)
}
function four(operation) {
  return calc(4, operation)
}
function five(operation) {
  return calc(5, operation)
}
function six(operation) {
  return calc(6, operation)
}
function seven(operation) {
  return calc(7, operation)
}
function eight(operation) {
  return calc(8, operation)
}
function nine(operation) {
  return calc(9, operation)
}

function plus(y) {
  return function(x) {
    return y + x
  }
}
function minus(y) {
  return function(x) {
    return x - y
  }
}
function times(y) {
  return function(x) {
    return x * y
  }
}
function dividedBy(y) {
  return function(x) {
    return Math.floor(x / y)
  }
}