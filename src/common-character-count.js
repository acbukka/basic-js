const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let count = 0;
  if (s2.length > s1.length) {
    for (let i = 0; i < s2.length; i++) {
      if (s2.includes(s1[i])) {
        for (let p = 0; p < s2.length; p++) {
          if (s1[i] === s2[p]) {
            s1.splice(i, 1);
            s2.splice(p, 1);
            count++;
            i = 0;
            p = 0;
          }
        }
      }
    }
    return count;
  } else {
    for (let i = 0; i < s1.length; i++) {
      if (s1.includes(s2[i])) {
        for (let p = 0; p < s1.length; p++) {
          if (s2[i] === s1[p]) {
            s2.splice(i, 1);
            s1.splice(p, 1);
            count++;
            i = 0;
            p = 0;
          }
        }
      }
    }
    return count;
  }
}
// Перепищи палегче слющай аа!?
module.exports = {
  getCommonCharacterCount,
};
