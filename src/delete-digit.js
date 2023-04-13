const {NotImplementedError} = require('../extensions/index.js');

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
    let result = 0;
    const arr = n.toString();
    for (let i = 0; i < arr.length; i++) {
        let a = arr.substring(i,i + 1);
        let b = Number(arr.replace(a, ''));
        if(result < b) {
            result = b;
        }
    }
    return result
}

module.exports = {
    deleteDigit
};
