
/**
 * My solution
 * bad option
 * */

function isIsogram(str){
  if (!str) {
      return true;
  }
  let result = false
  const arr = str.toLowerCase().split('');
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    result = count >= 2
    if (result) {
      break;
    }
  }
  return !result;
}


/**
 * solution 2: Set
 * */

function isIsogram2(str){
  return new Set(str.toUpperCase()).size == str.length;
}

/**
 * solution 3: regex
 * */

function isIsogram3(str){
  return !/(\w).*\1/i.test(str)
}