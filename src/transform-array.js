const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-prev" && i !== 0) {
      newArr.splice(i - 1, 1);
    }
    if (newArr[i] === "--discard-next") {
      newArr.splice(i + 1, 1);
    }
    if (newArr[i] === "--double-prev" && i !== 0) {
      newArr.splice(i, 1, newArr[i - 1]);
    }
    if (newArr[i] === "--double-next") {
      newArr.splice(i, 1, newArr[i + 1]);
    }
  }
  newArr = newArr.filter(
    (item) =>
      item !== "--double-prev" &&
      item !== "--double-next" &&
      item !== "--discard-prev" &&
      item !== "--discard-next" &&
      item !== undefined
  );
  return newArr;
}

module.exports = {
  transform,
};
