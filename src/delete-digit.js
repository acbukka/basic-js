const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newNum = n.toString().split("");
  let stack = [];
  for (let i = 0; i < newNum.length; i++) {
    stack.push(
      Number(
        newNum
          .slice(0, i)
          .concat(newNum.slice(i + 1))
          .join("")
      )
    );
  }
  return Math.max(...stack);
}

module.exports = {
  deleteDigit,
};
