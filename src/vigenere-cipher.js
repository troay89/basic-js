const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = {
  'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12,
  'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25
}

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = (typeof reverse === 'undefined') ? true : reverse
  }

  encrypt(text, key) {
    if (typeof text === 'undefined' || typeof key === 'undefined') throw Error("Incorrect arguments!")
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    const textArrNumber = [...upperText].map(item => alphabet.hasOwnProperty(item) ? alphabet[item] : item);
    const keyArrNumber = [...upperKey].map(item => alphabet.hasOwnProperty(item) ? alphabet[item] : item);
    const textCipheringNumber = [];
    let result;
    let j = 0;
    for (let i = 0; i < textArrNumber.length; i++) {
      if (Number.isInteger(textArrNumber[i])) {
        if (j === keyArrNumber.length) j = 0;
        const number = (textArrNumber[i] + keyArrNumber[j]) % 26;
        const char = Object.keys(alphabet).find(key => alphabet[key] === number);
        textCipheringNumber.push(char);
        j += 1;
      } else {
        textCipheringNumber.push(textArrNumber[i]);
      }
    }
    result = result = !this.reverse ? textCipheringNumber.reverse().join("") : textCipheringNumber.join("");
    console.log(result);
    return result;
  }

  decrypt(text, key) {
    if (typeof text === 'undefined' || typeof key === 'undefined') throw Error("Incorrect arguments!")
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    const textArrNumber = [...upperText].map(item => alphabet.hasOwnProperty(item) ? alphabet[item] : item);
    const keyArrNumber = [...upperKey].map(item => alphabet.hasOwnProperty(item) ? alphabet[item] : item);
    const textCipheringNumber = [];
    let result;
    let j = 0;
    for (let i = 0; i < textArrNumber.length; i++) {
      if (Number.isInteger(textArrNumber[i])) {
        if (j === keyArrNumber.length) j = 0;
        const tempNumber = (textArrNumber[i] - keyArrNumber[j]);
        const number = tempNumber < 0 ? tempNumber + 26 : tempNumber % 26;
        const char = Object.keys(alphabet).find(key => alphabet[key] === number);
        textCipheringNumber.push(char);
        j += 1;
      } else {
        textCipheringNumber.push(textArrNumber[i]);
      }
    }
    result = !this.reverse ? textCipheringNumber.reverse().join("") : textCipheringNumber.join("");
    console.log(result);
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
