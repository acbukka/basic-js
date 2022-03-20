const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.includes(-1)) {
    let values = arr.filter((item) => item > -1).sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        arr[i] = 0;
      }
    }
    let counter = 0;
    for (let p = 0; p < arr.length; p++) {
      if (arr[p] === 0) {
        arr[p] = values[counter];
        counter++;
      }
    }
    return arr;
  } else {
    return arr.sort((a, b) => a - b);
  }
}

module.exports = {
  sortByHeight,
};
