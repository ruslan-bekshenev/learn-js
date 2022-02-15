decodeMorse = function (morseCode) {
  const alpha = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '-.-.--': '!',
    '.-.-.-': '.',
    '...---...': 'SOS',
    '...---...--..--': 'SOS!'
  };
  const words = morseCode.trim().split('   ')
  let message = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i].split(' ')
    for (let j = 0; j < word.length; j++) {
      message.push(alpha[word[j]])
    }
    if (i !== words.length - 1) {
      message.push(' ')
    }
  }
  return message.join('')
}