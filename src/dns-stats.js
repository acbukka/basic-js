const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newObj = {};
  for (let i = 0; i < domains.length; i++) {
    let domainArr = domains[i]
      .split(".")
      .reverse()
      .map((item) => "." + item);
    for (let p = 0; p <= domainArr.length + 1; p++) {
      let copyArr = domainArr;
      let newElement = copyArr.join("");
      if (newObj.hasOwnProperty(newElement)) {
        newObj[newElement] = newObj[newElement] + 1;
      } else {
        newObj[newElement] = 1;
      }
      copyArr.pop();
    }
  }
  return Object.keys(newObj)
    .sort()
    .reduce((a, b) => {
      a[b] = newObj[b];
      return a;
    }, {});
}

module.exports = {
  getDNSStats,
};
