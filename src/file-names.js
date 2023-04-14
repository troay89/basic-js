const { NotImplementedError } = require('../extensions/index.js');

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
  const result = []
  let index = 1;
  let secondIndex = 1;
  const set = new Set(names);
  for (let name of names) {
    if (result.includes(name)) {
      if (name.includes('(')){
        result.push(`${name}(${secondIndex})`)
        secondIndex++;
      }else {
        result.push(`${name}(${index})`)
        index++;
      }
    } else {
      result.push(name)
    }
  }
  console.log(result)
  return result;
}

module.exports = {
  renameFiles
};
