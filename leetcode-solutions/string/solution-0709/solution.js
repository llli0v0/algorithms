/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i].toLocaleLowerCase();
  }
  return result;
};