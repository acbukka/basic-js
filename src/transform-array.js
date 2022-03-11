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
  // throw new NotImplementedError('Not implemented');
  let newArr = arr;
  if (newArr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < newArr.length; i++) {
    if (arr.includes("--discrard-next") || arr.includes("--discrard-prev")) {
      return arr;
    }
    if (newArr[i] === "--discard-next" && typeof newArr[i + 1] === "number") {
      newArr.splice(i + 1, 1);
    }
    if (newArr[i] === "--discard-prev" && i !== 0) {
      newArr.splice(i - 1, 1);
    }
    if (newArr[i] === "--double-next" && typeof newArr[i + 1] === "number") {
      newArr.splice(i, 1, newArr[i + 1]);
    }
    if (newArr[i] === "--double-prev" && i !== 0) {
      newArr.splice(i, 1, newArr[i - 1]);
    }
  }
  // for (let i = 0; i < arr.length; i++) {}
  newArr = newArr.filter(
    (item) =>
      item !== "--double-prev" &&
      item !== "--double-next" &&
      item !== "--discard-prev" &&
      item !== "--discard-next"
  );
  return newArr;
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
