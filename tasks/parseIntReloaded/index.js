let multiMap = {
  "hundred":100,
  "thousand":1000,
  "million":1000000
};

let map = {
  "zero":0,
  "one":1,
  "two":2,
  "three":3,
  "four":4,
  "five":5,
  "six":6,
  "seven":7,
  "eight":8,
  "nine":9,
  "ten":10,
  "eleven":11,
  "twelve":12,
  "thirteen":13,
  "fourteen":14,
  "fifteen":15,
  "sixteen":16,
  "seventeen":17,
  "eigthteen":18,
  "nineteen":19,
  "twenty":20,
  "thirty":30,
  "forty":40,
  "fifty":50,
  "sixty":60,
  "seventy":70,
  "eighty":80,
  "ninety":90,
};

function getNumber(str) {
  const nArr = str.split("-") 
  return nArr.length > 1 ? map[nArr[0]] + map[nArr[1]] : map[string];
}

function parseInt(str) {
  let result = 0
  let result2 = 0
  let multiply = 0
  const numbers = str.split(" ")
  
  numbers.map(function(number) {
    if (multiMap[number]) {
      result *= multiMap[number];
      if (result >= 1000) {
        result2 = result;
        result = 0;
      }
    }
    else if (number != "and") {
      result += getNumber(number);
    }
  });
  return result + result2;
}