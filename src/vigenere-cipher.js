const { NotImplementedError } = require("../extensions/index.js");

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
// Без удаления пробелов:
class VigenereCipheringMachine {
  constructor(isRight = true) {
    this.type = isRight;
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    let diff = Math.ceil(text.length / key.length);
    key = key.repeat(diff).toUpperCase();
    console.log(text.length, key.length);
    let startA = "A".charCodeAt(0);
    let alphabet = 26;
    let result = [];
    let keyCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text[i])) {
        result.push(text[i]);
        keyCount--;
      } else {
        let letterIndex = text[i].charCodeAt(0) - startA;
        let shift = key[keyCount].charCodeAt(0) - startA;
        result.push(
          String.fromCharCode(startA + ((letterIndex + shift) % alphabet))
        );
      }
      keyCount++;
    }
    return this.type ? result.join("") : result.reverse().join("");
  }
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let newText = text.toUpperCase();
    let diff = Math.ceil(newText.length / key.length);
    key = key.repeat(diff).toUpperCase();
    let startA = "A".charCodeAt(0);
    let alphabet = 26;
    let result = [];
    let keyCount = 0;
    for (let i = 0; i < newText.length; i++) {
      if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(newText[i])) {
        result.push(newText[i]);
        keyCount--;
      } else {
        let letterIndex = text[i].charCodeAt(0) - startA;
        let shift = key[keyCount].charCodeAt(0) - startA;
        result.push(
          String.fromCharCode(
            startA + ((letterIndex - shift + alphabet) % alphabet)
          )
        );
      }
      keyCount++;
    }
    return this.type ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
