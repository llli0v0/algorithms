/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let current = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let len = Math.min(current.length, strs[i].length);
    let nextCurrent = '';
    for (let j = 0; j < len; j++) {
      if (current[j] === strs[i][j]) {
        nextCurrent += current[j];
      } else {
        break;
      }
    }
    current = nextCurrent;
  }
  return current;
};