const {NotImplementedError} = require('../extensions/index.js');

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
    if (!Array.isArray(arr)) throw Error('\'arr\' parameter must be an instance of the Array!');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && arr[i] === '--discard-prev') {
        } else if (i === 0 && arr[i] === '--double-prev') {
        } else if (i === arr.length - 1 && arr[i] === '--double-next') {
        } else if (i === arr.length - 1 && arr[i] === '--discard-next') {
        } else if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
            i += 2;
        } else if (arr[i] === '--double-next' && arr[i + 2] === '--double-prev') {
            result.push(arr[i + 1]);
            result.push(arr[i + 1]);
            result.push(arr[i + 1]);
            i += 2;
        }else if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev'){
            i += 2;
        }else if (arr[i] === '--double-next' && arr[i + 2] === '--discard-prev') {
            result.push(arr[i + 1]);
            i += 2;
        } else if (arr[i] === '--discard-next') {
            i += 1;
        } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--double-next') {
            result.splice(result.length - 1, 1);
        } else if (arr[i] === '--double-next') {
            result.push(arr[i + 1])
        } else if (arr[i] === '--double-prev' && (arr[i - 2] !== '--double-prev')) {
            result.push(arr[i - 1])
        } else {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}

module.exports = {
    transform
};
