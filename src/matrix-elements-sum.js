const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 1; i < matrix.length; i++) {
    for (let p = 0; p < matrix[i].length; p++) {
      if (matrix[i - 1][p] !== 0) {
        count += matrix[i][p];
      }
    }
  }
  return count + matrix[0].reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum,
};
