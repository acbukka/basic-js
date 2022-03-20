const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  newArr: [],
  getLength: function () {
    return chainMaker.newArr.length;
  },
  addLink: function (value) {
    this.newArr.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink: function (position) {
    if (
      position < 1 ||
      position > this.newArr.length ||
      typeof position !== "number"
    ) {
      this.newArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.newArr.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain: function () {
    this.newArr.reverse();
    return chainMaker;
  },
  finishChain: function () {
    let finishArr = this.newArr;
    this.newArr = [];
    return finishArr.reduce((a, b) => `${a}~~${b}`);
  },
};

module.exports = {
  chainMaker,
};
