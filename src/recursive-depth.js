const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

let count = 1

class DepthCalculator {
  calculateDepth(arr) {
    if (typeof arr === 'undefined') return 0
    let count = 1;
    let max = 0;

    for (let item of arr) {
      if (Array.isArray(item)) {
        max = Math.max(this.calculateDepth(item), max)
      }
    }
    return count + max;
  }
}

module.exports = {
  DepthCalculator
};
