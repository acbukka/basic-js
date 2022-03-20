const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newObj = {};
  for (let p = 0; p < names.length; p++) {
    if (newObj.hasOwnProperty(names[p])) {
      newObj[names[p]] = newObj[names[p]] + 1;
      newObj[names[p] + `(${newObj[names[p]]})`] = 0;
    } else {
      newObj[names[p]] = 0;
    }
  }
  return Object.keys(newObj);
}

module.exports = {
  renameFiles,
};
