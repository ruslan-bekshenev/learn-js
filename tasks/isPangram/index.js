
/**
 * My solution
 * */
function isPangram(string){
  const alphabet = [...Array(26)].map(item => (++i).toString(36),i=9);
  const lengthStr = alphabet.filter((char) => string.toLowerCase().split('').includes(char)).length
  return lengthStr === 26
}


/**
 * better solutions
 * */
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}