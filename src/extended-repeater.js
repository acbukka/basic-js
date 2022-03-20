const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  str = str + "";
  let repeat = options.repeatTimes;
  let separ = options.separator;
  let addit = options.addition;
  let additionRepeat = options.additionRepeatTimes;
  let addSepar = options.additionSeparator;
  let newStr = "";
  if (repeat === undefined) {
    repeat = 1;
  }
  if (additionRepeat === undefined) {
    additionRepeat = 1;
  }
  if (separ === undefined) {
    separ = "+";
  }
  if (addSepar === undefined) {
    addSepar = "|";
  }
  for (let i = 0; i < repeat; i++) {
    newStr += str;
    for (let p = 0; p < additionRepeat; p++) {
      if (p === additionRepeat - 1) {
        newStr += addit;
      } else {
        newStr += addit + addSepar;
      }
    }
    if (i === repeat - 1) {
      newStr += "";
    } else {
      newStr += separ;
    }
  }
  return newStr.replace(/undefined/gi, "");
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
