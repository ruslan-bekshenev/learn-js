function alphabetPosition(text) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  return text.toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map((char) => alphabet.findIndex((letter) => char === letter) + 1).join(' ')
}

