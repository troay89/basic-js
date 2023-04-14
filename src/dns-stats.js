const {NotImplementedError} = require('../extensions/index.js');

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
    if(domains.length === 0) return {}
    let temp = '';
    for (let domain of domains) {
        if (temp.length < domain.length) temp = domain;
    }
    const arr = temp.split('.').reverse();
    const result = {};
    let field = '';
    for (let char of arr) {
        let str = '.' + char;
        field += str
        let index = 0;
        for (let domain of domains) {
            if (domain.includes(char)) index++;
        }
        result[field] = index
    }
    return result
}


module.exports = {
    getDNSStats
};
