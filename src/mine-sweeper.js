const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let copyMatrix = JSON.parse(JSON.stringify(matrix));
  let newMatrix = matrix;
  let valuesOfTrue = [];
  newMatrix.push([]);
  newMatrix.unshift([]);
  for (let i = 0; i < newMatrix[1].length; i++) {
    newMatrix[0].push(false);
    newMatrix[newMatrix.length - 1].push(false);
  }
  for (let p = 0; p < newMatrix.length; p++) {
    newMatrix[p].unshift(false);
    newMatrix[p].push(false);
  }
  for (let i = 1; i < newMatrix.length - 1; i++) {
    for (let p = 1; p < newMatrix[i].length - 1; p++) {
      let filteredCircle = [];
      filteredCircle.push(
        newMatrix[i][p - 1],
        newMatrix[i][p + 1],
        newMatrix[i - 1][p],
        newMatrix[i + 1][p],
        newMatrix[i - 1][p - 1],
        newMatrix[i + 1][p + 1],
        newMatrix[i + 1][p - 1],
        newMatrix[i - 1][p + 1]
      );
      valuesOfTrue.push(filteredCircle.filter((item) => item === true).length);
    }
  }
  let count = 0;
  for (let i = 0; i < copyMatrix.length; i++) {
    for (let p = 0; p < copyMatrix[i].length; p++) {
      copyMatrix[i][p] = valuesOfTrue[count];
      count++;
    }
  }
  return copyMatrix;
}

module.exports = {
  minesweeper,
};
