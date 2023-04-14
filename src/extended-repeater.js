const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result= '';
  let contRepeat = (typeof options.repeatTimes === 'undefined') ? 1 : options.repeatTimes;
  let contAdditionRepeat = (typeof options.additionRepeatTimes === 'undefined') ? 1 : options.additionRepeatTimes;
  if(typeof options.additionSeparator === 'undefined') options.additionSeparator = '|';
  for (let i = 0; i < contRepeat; i++) {
    result += str;
    for (let j = 0; j < contAdditionRepeat; j++) {
      if (typeof options.addition === 'undefined') continue;
      if (j === contAdditionRepeat -1) result += options.addition;
      else result += options.addition + options.additionSeparator;
    }
    if(typeof options.separator === 'undefined') options.separator = '+';
    if(i !== contRepeat - 1)result += options.separator;
  }
  console.log(result);
  return result;
}

module.exports = {
  repeater
};
